export enum PlanType {
  FREE = 0,
  TEAM = 1,
  ENTERPRISE = 2,
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
  name: string;
  title: string;
  description: string;
  features: { id: string; content?: string; tooltip?: string }[];
  mainFeatures: string[];
}

export const FEATURE_SECTIONS = [
  {
    id: "database-management",
    features: [
      "instance-count",
      "schema-change",
      "migration-history",
      "sql-editor",
      "database-backup-restore",
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
  name: "Free",
  title: "subscription.plan.free.title",
  description: "subscription.plan.free.desc",
  features: [
    {
      id: "instance-count",
      content:
        "subscription.feature-sections.database-management.features.instance-upto-5",
    },
    { id: "schema-change" },
    { id: "migration-history" },
    { id: "sql-editor" },
    { id: "database-backup-restore" },
    { id: "archiving" },
    {
      id: "sql-check",
      content:
        "subscription.feature-sections.database-management.features.sql-check-basic",
      tooltip:
        "subscription.feature-sections.database-management.features.sql-check-basic-tooltip",
    },
    {
      id: "anomaly-detection",
      content:
        "subscription.feature-sections.database-management.features.anomaly-detection-basic",
      tooltip:
        "subscription.feature-sections.database-management.features.anomaly-detection-basic-tooltip",
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
  label: "subscription.plan.team.label",
  type: PlanType.TEAM,
  trialDays: 14,
  unitPrice: "1740",
  trialPrice: 14,
  pricePerInstancePerMonth: 29,
  priceDescription: "team-price-intro",
  // Plan desc and feature
  name: "Team",
  title: "subscription.plan.team.title",
  description: "subscription.plan.team.desc",
  features: [
    {
      id: "instance-count",
      content:
        "subscription.feature-sections.database-management.features.instance-minimum-5",
    },
    { id: "schema-change" },
    { id: "migration-history" },
    { id: "sql-editor" },
    { id: "database-backup-restore" },
    { id: "archiving" },
    {
      id: "sql-check",
      content:
        "subscription.feature-sections.database-management.features.sql-check-advanced",
      tooltip:
        "subscription.feature-sections.database-management.features.sql-check-advanced-tooltip",
    },
    {
      id: "anomaly-detection",
      content:
        "subscription.feature-sections.database-management.features.anomaly-detection-advanced",
      tooltip:
        "subscription.feature-sections.database-management.features.anomaly-detection-advanced-tooltip",
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
  label: "subscription.plan.enterprise.label",
  type: PlanType.ENTERPRISE,
  trialDays: 14,
  unitPrice: "11940",
  trialPrice: 0,
  pricePerInstancePerMonth: 199,
  priceDescription: "enterprise-price-intro",
  // Plan desc and feature
  name: "Enterprise",
  title: "subscription.plan.enterprise.title",
  description: "subscription.plan.enterprise.desc",
  features: [
    {
      id: "instance-count",
      content:
        "subscription.feature-sections.database-management.features.instance-customized",
    },
    { id: "schema-change" },
    { id: "migration-history" },
    { id: "sql-editor" },
    { id: "database-backup-restore" },
    { id: "archiving" },
    {
      id: "sql-check",
      content:
        "subscription.feature-sections.database-management.features.sql-check-advanced",
      tooltip:
        "subscription.feature-sections.database-management.features.sql-check-advanced-tooltip",
    },
    {
      id: "anomaly-detection",
      content:
        "subscription.feature-sections.database-management.features.anomaly-detection-advanced",
      tooltip:
        "subscription.feature-sections.database-management.features.anomaly-detection-advanced-tooltip",
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
