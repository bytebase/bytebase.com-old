import planData from "./plan.yaml";

export enum PlanType {
  FREE = 0,
  TEAM = 1,
  ENTERPRISE = 2,
}

export interface Plan {
  // Plan meta data
  type: PlanType;
  trialDays: number;
  unitPrice: number;
  trialPrice: number;
  pricePerSeatPerMonth: number;
  pricePerInstancePerMonth: number;
  // Plan desc and feature
  title: string;
  featureList: {
    type: string;
    content?: string;
    tooltip?: string;
  }[];
  mainFeatureList: string[];
}

export const FEATURE_SECTIONS: { type: string; featureList: string[] }[] =
  planData.categoryList;

export const PLANS: Plan[] = planData.planList;
