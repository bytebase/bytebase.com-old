import { ref, reactive } from "@nuxtjs/composition-api";
import { Analytics, AnalyticsBrowser } from "@segment/analytics-next";
import { useCookie } from "./cookie";

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
    const cookie = useCookie();
    return {
      source: cookie.get("source"),
      utm_source: cookie.get("utm_source"),
      utm_medium: cookie.get("utm_medium"),
      utm_campaign: cookie.get("utm_campaign"),
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
