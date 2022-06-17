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
  LOGIN: `${PAGE.PRICING}.login.${ACTION.CLICK}`,
};

const analytics = ref<Analytics>();
const analyticsForNewsletter = ref<Analytics>();

export const useSegment = () => {
  if (!analytics.value) {
    AnalyticsBrowser.load({
      writeKey: "EEgWyVTmuufXUJMulZ2EGgfN2VBy0EBP",
    })
      .then(([response]) => {
        analytics.value = response;
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
        analyticsForNewsletter.value = response;
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

// getSourceFromUrl will extract the "source" param from url
export const getSourceFromUrl = (): string => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  return params.get("source")?.toLowerCase() ?? "";
};
