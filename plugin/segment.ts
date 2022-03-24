import { ref, reactive } from "@nuxtjs/composition-api";
import { Analytics, AnalyticsBrowser } from "@segment/analytics-next";

const PREFIX = "main-site";

export const PAGE = {
  PRICING: `${PREFIX}.pricing`,
};

const ACTION = {
  CLICK: "click",
};

export const PRICING_EVENT = {
  FREE_PLAN_CLICK: `${PAGE.PRICING}.free-plan.${ACTION.CLICK}`,
  ENTERPRISE_PLAN_CLICK: `${PAGE.PRICING}.enterprise-plan.${ACTION.CLICK}`,
  TEAM_PLAN_CLICK: `${PAGE.PRICING}.team-plan.${ACTION.CLICK}`,
};

const analytics = ref<Analytics>()

export const useSegment = () => {
  if (!analytics.value && process.env.segmentKey) {
    AnalyticsBrowser.load({
      writeKey: process.env.segmentKey,
    })
    .then(([response]) => {
      analytics.value = response;
    })
    .catch((e) => {
      console.log('error loading segment');
    });
  }

  return reactive({
    analytics,
  });
}
