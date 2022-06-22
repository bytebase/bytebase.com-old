export enum PlanType {
  FREE = "FREE",
  TEAM = "TEAM",
  ENTERPRISE = "ENTERPRISE",
}

export interface Plan {
  // Plan meta data
  label?: string;
  type: PlanType;
  trialDays: number;
  unitPrice: string;
  trialPrice: number;
  pricePerInstancePerMonth: number;
  priceDescription: string;
  // Plan desc and feature
  imagePath: string;
  title: string;
  description: string;
  features: { id: string; content?: string; tooltip?: string }[];
  mainFeatures: string[];
}

export const FEATURE_SECTIONS = [
  {
    id: "database-development",
    features: [
      "instance-count",
      "schema-change",
      "migration-history",
      "sql-editor",
      "disaster-recovery",
      "archiving",
      "sql-check",
      "anomaly-detection",
      "schedule-change",
      "review-and-backup-policy",
      "tenancy",
    ],
  },
  {
    id: "collaboration",
    features: [
      "ui-based-sql-review",
      "vsc-workflow",
      "shareable-query-link",
      "im-integration",
      "inbox-notification",
    ],
  },
  {
    id: "admin-and-security",
    features: [
      "activity-log",
      "rbac",
      "3rd-party-auth",
      "sync-members-from-vcs",
    ],
  },
  {
    id: "branding",
    features: ["branding-logo"],
  },
];

const FREE_PLAN: Plan = {
  // Plan meta data
  type: PlanType.FREE,
  trialDays: 0,
  unitPrice: "0",
  trialPrice: 0,
  pricePerInstancePerMonth: 0,
  priceDescription: "free-price-intro",
  // Plan desc and feature
  imagePath: "plan-free.webp",
  title: "pricing.subscription.plan.free.title",
  description: "pricing.subscription.plan.free.desc",
  features: [
    {
      id: "instance-count",
      content:
        "pricing.subscription.feature-sections.database-development.features.instance-upto-5",
    },
    { id: "schema-change" },
    { id: "migration-history" },
    { id: "sql-editor" },
    {
      id: "disaster-recovery",
      content:
        "pricing.subscription.feature-sections.database-development.features.disaster-recovery-basic",
      tooltip:
        "pricing.subscription.feature-sections.database-development.features.disaster-recovery-basic-tooltip",
    },
    { id: "archiving" },
    {
      id: "sql-check",
      content:
        "pricing.subscription.feature-sections.database-development.features.sql-check-basic",
      tooltip:
        "pricing.subscription.feature-sections.database-development.features.sql-check-basic-tooltip",
    },
    {
      id: "anomaly-detection",
      content:
        "pricing.subscription.feature-sections.database-development.features.anomaly-detection-basic",
      tooltip:
        "pricing.subscription.feature-sections.database-development.features.anomaly-detection-basic-tooltip",
    },
    { id: "ui-based-sql-review" },
    { id: "vsc-workflow" },
    { id: "shareable-query-link" },
    { id: "im-integration" },
    { id: "inbox-notification" },
    { id: "activity-log" },
  ],
  mainFeatures: [
    "community-support",
    "review-workflow",
    "sql-editor",
    "database-backup-restore",
    "im-integration",
  ],
};

const TEAM_PLAN: Plan = {
  // Plan meta data
  label: "pricing.subscription.plan.team.label",
  type: PlanType.TEAM,
  trialDays: 14,
  unitPrice: "1740",
  trialPrice: 0,
  pricePerInstancePerMonth: 79,
  priceDescription: "team-price-intro",
  // Plan desc and feature
  imagePath: "plan-team.webp",
  title: "pricing.subscription.plan.team.title",
  description: "pricing.subscription.plan.team.desc",
  features: [
    {
      id: "instance-count",
      content:
        "pricing.subscription.feature-sections.database-development.features.instance-minimum-5",
    },
    { id: "schema-change" },
    { id: "migration-history" },
    { id: "sql-editor" },
    {
      id: "disaster-recovery",
      content:
        "pricing.subscription.feature-sections.database-development.features.disaster-recovery-advanced",
      tooltip:
        "pricing.subscription.feature-sections.database-development.features.disaster-recovery-advanced-tooltip",
    },
    { id: "archiving" },
    {
      id: "sql-check",
      content:
        "pricing.subscription.feature-sections.database-development.features.sql-check-advanced",
      tooltip:
        "pricing.subscription.feature-sections.database-development.features.sql-check-advanced-tooltip",
    },
    {
      id: "anomaly-detection",
      content:
        "pricing.subscription.feature-sections.database-development.features.anomaly-detection-advanced",
      tooltip:
        "pricing.subscription.feature-sections.database-development.features.anomaly-detection-advanced-tooltip",
    },
    { id: "schedule-change" },
    { id: "review-and-backup-policy" },
    { id: "ui-based-sql-review" },
    { id: "vsc-workflow" },
    { id: "shareable-query-link" },
    { id: "im-integration" },
    { id: "inbox-notification" },
    { id: "activity-log" },
    { id: "rbac" },
    { id: "3rd-party-auth" },
    { id: "sync-members-from-vcs" },
    { id: "branding-logo" },
  ],
  mainFeatures: [
    "email-support",
    "everything-in-free-plan",
    "rbac",
    "gitlab-login",
    "sql-check-anomaly-detection",
    "review-and-backup-policy",
  ],
};

const ENTERPRISE_PLAN: Plan = {
  // Plan meta data
  label: "pricing.subscription.plan.enterprise.label",
  type: PlanType.ENTERPRISE,
  trialDays: 0,
  unitPrice: "11940",
  trialPrice: 0,
  pricePerInstancePerMonth: 199,
  priceDescription: "enterprise-price-intro",
  // Plan desc and feature
  imagePath: "plan-enterprise.webp",
  title: "pricing.subscription.plan.enterprise.title",
  description: "pricing.subscription.plan.enterprise.desc",
  features: [
    {
      id: "instance-count",
      content:
        "pricing.subscription.feature-sections.database-development.features.instance-customized",
    },
    { id: "schema-change" },
    { id: "migration-history" },
    { id: "sql-editor" },
    {
      id: "disaster-recovery",
      content:
        "pricing.subscription.feature-sections.database-development.features.disaster-recovery-advanced",
      tooltip:
        "pricing.subscription.feature-sections.database-development.features.disaster-recovery-advanced-tooltip",
    },
    { id: "archiving" },
    {
      id: "sql-check",
      content:
        "pricing.subscription.feature-sections.database-development.features.sql-check-advanced",
      tooltip:
        "pricing.subscription.feature-sections.database-development.features.sql-check-advanced-tooltip",
    },
    {
      id: "anomaly-detection",
      content:
        "pricing.subscription.feature-sections.database-development.features.anomaly-detection-advanced",
      tooltip:
        "pricing.subscription.feature-sections.database-development.features.anomaly-detection-advanced-tooltip",
    },
    { id: "schedule-change" },
    { id: "review-and-backup-policy" },
    { id: "tenancy" },
    { id: "ui-based-sql-review" },
    { id: "vsc-workflow" },
    { id: "shareable-query-link" },
    { id: "im-integration" },
    { id: "inbox-notification" },
    { id: "activity-log" },
    { id: "rbac" },
    { id: "3rd-party-auth" },
    { id: "sync-members-from-vcs" },
    { id: "branding-logo" },
  ],
  mainFeatures: [
    "sla",
    "everything-in-team-plan",
    "multi-tenancy",
    "more-to-come",
  ],
};

export const PLANS: Plan[] = [FREE_PLAN, TEAM_PLAN, ENTERPRISE_PLAN];
