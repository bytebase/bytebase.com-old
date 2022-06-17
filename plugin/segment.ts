import { ref, reactive } from "@nuxtjs/composition-api";
import { Analytics, AnalyticsBrowser } from "@segment/analytics-next";

const PREFIX = "main-site";

export const PAGE = {
  PRICING: `${PREFIX}.pricing`,
};

export const ACTION = {
  CLICK: "click",
};

export const PRICING_EVENT = {
  FREE_PLAN_CLICK: `${PAGE.PRICING}.free-plan.${ACTION.CLICK}`,
  ENTERPRISE_PLAN_CLICK: `${PAGE.PRICING}.enterprise-plan.${ACTION.CLICK}`,
  TEAM_PLAN_CLICK: `${PAGE.PRICING}.team-plan.${ACTION.CLICK}`,
  LOGIN_CLICK: `${PAGE.PRICING}.login.${ACTION.CLICK}`,
};

export interface Metric {
  page: (name: string) => void;
  track: (name: string) => void;
}

const analytics = ref<Metric>();
const analyticsForNewsletter = ref<Metric>();

class SegmentMetric implements Metric {
  private analytics: Analytics;
  constructor(analytics: Analytics) {
    this.analytics = analytics;
  }

  page(name: string) {
    this.analytics.page(name, {
      ...this.metricParamater,
    });
  }

  track(name: string) {
    this.analytics.track(name, {
      ...this.metricParamater,
    });
  }

  private get metricParamater() {
    return {
      source: getUrlParamater("source"),
      utm_source: getUrlParamater("utm_source"),
      utm_medium: getUrlParamater("utm_medium"),
      utm_campaign: getUrlParamater("utm_campaign"),
    };
  }
}

export const useSegment = () => {
  if (!analytics.value) {
    AnalyticsBrowser.load({
      writeKey: "EEgWyVTmuufXUJMulZ2EGgfN2VBy0EBP",
    })
      .then(([response]) => {
        analytics.value = new SegmentMetric(response);
      })
      .catch((e) => {
        console.log("error loading segment", e);
      });
  }

  if (!analyticsForNewsletter.value) {
    AnalyticsBrowser.load({
      writeKey: "CVXXNXv3EzfQPYqHoYvlDDDOXmKa9XOj",
    })
      .then(([response]) => {
        analyticsForNewsletter.value = new SegmentMetric(response);
      })
      .catch((e) => {
        console.log("error loading segment", e);
      });
  }

  return reactive({
    analytics,
    analyticsForNewsletter,
  });
};

// getUrlParamater will extract the param by key from url
export const getUrlParamater = (key: string): string => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  return params.get(key) ?? "";
};
