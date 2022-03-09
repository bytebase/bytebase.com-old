
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
  title: string;
  description: string;
  features: { id: string; content?: string, tooltip?: string }[];
  mainFeatures: string[];
}

export const FEATURE_SECTIONS = [
  {
    id: "Database Development",
    features: [
      "Instance",
      "Schema and data change",
      "Migration history",
      "SQL Editor",
      "Database backup / restore",
      "Archiving",
      "SQL check",
      "Anomaly detection",
      "Scheduled change at specific time",
      "Review and backup policy",
      "Multi-Region / Multi-Tenancy deployment",
    ],
  },
  {
    id: "Collaboration",
    features: [
      "UI based SQL review",
      "VCS workflow #GitOps",
      "Shareable query link",
      "IM integration",
      "Inbox notification",
    ],
  },
  {
    id: "Admin & Security",
    features: [
      "Activity log",
      "RBAC (Owner, DBA, Developer role)",
      "Login with GitLab account",
      "Sync project membership from the linked GitLab project",
    ],
  },
];

const FREE_PLAN: Plan = {
  // Plan meta data
  type: PlanType.FREE,
  trialDays: 0,
  unitPrice: "0",
  trialPrice: 0,
  pricePerInstancePerMonth: 0,
  priceDescription: "Up to 5",
  // Plan desc and feature
  title: "Free",
  description: "Personal project or small team, no DBA",
  features: [
    { id: "Instance", content: "Up to 5" },
    { id: "Schema and data change" },
    { id: "Migration history" },
    { id: "SQL Editor" },
    { id: "Database backup / restore" },
    { id: "Archiving" },
    { id: "SQL check", content: "Basic", tooltip: "Syntax check, connection check" },
    { id: "Anomaly detection", content: "Basic", tooltip: "Connection failure, missing backup" },
    { id: "UI based SQL review" },
    { id: "VCS workflow #GitOps" },
    { id: "GitOps workflow" },
    { id: "Shareable query link" },
    { id: "IM integration" },
    { id: "Inbox notification" },
    { id: "Activity log" },
  ],
  mainFeatures: [
    "Community support",
    "Schema and data change review workflow",
    "SQL Editor",
    "Database backup / restore",
    "IM integration (e.g. Slack, Discord and etc)",
  ],
};

const TEAM_PLAN: Plan = {
  // Plan meta data
  label: "Beta",
  type: PlanType.TEAM,
  trialDays: 14,
  unitPrice: "1740",
  trialPrice: 14,
  pricePerInstancePerMonth: 29,
  priceDescription: "5 minimum, billed annually",
  // Plan desc and feature
  title: "Team",
  description: "Medium size team, with dedicated DBA or TL for engineering velocity",
  features: [
    { id: "Instance", content: "5 ~ unlimited" },
    { id: "Schema and data change" },
    { id: "Migration history" },
    { id: "SQL Editor" },
    { id: "Database backup / restore" },
    { id: "Archiving" },
    {
      id: "SQL check",
      content: "Advanced",
      tooltip: "Basic + Backward compatibility check"
    },
    {
      id: "Anomaly detection",
      content: "Advanced",
      tooltip: "Basic + Drift detection"
    },
    { id: "Scheduled change at specific time" },
    { id: "Review and backup policy" },
    { id: "UI based SQL review" },
    { id: "VCS workflow #GitOps" },
    { id: "Shareable query link" },
    { id: "IM integration" },
    { id: "Inbox notification" },
    { id: "Activity log" },
    { id: "RBAC (Owner, DBA, Developer role)" },
    { id: "Login with GitLab account" },
    { id: "Sync project membership from the linked GitLab project" },
  ],
  mainFeatures: [
    "Email support",
    "Everything in free plan",
    "Owner, DBA and Developer roles",
    "GitLab login",
    "Advanced SQL check and anomaly detection",
    "Review and backup policy",
  ],
};

const ENTERPRISE_PLAN: Plan = {
  // Plan meta data
  label: "Early access",
  type: PlanType.ENTERPRISE,
  trialDays: 14,
  unitPrice: "11940",
  trialPrice: 0,
  pricePerInstancePerMonth: 199,
  priceDescription: "Customized, billed annually",
  // Plan desc and feature
  title: "Enterprise",
  description: "Large organization, with dedicated DBA group to manage database fleet",
  features: [
    { id: "Instance", content: "Customized" },
    { id: "Schema and data change" },
    { id: "Migration history" },
    { id: "SQL Editor" },
    { id: "Database backup / restore" },
    { id: "Archiving" },
    {
      id: "SQL check",
      content: "Advanced",
      tooltip: "Basic + Backward compatibility check"
    },
    {
      id: "Anomaly detection",
      content: "Advanced",
      tooltip: "Basic + Drift detection"
    },
    { id: "Scheduled change at specific time" },
    { id: "Review and backup policy" },
    { id: "Multi-Region / Multi-Tenancy deployment" },
    { id: "UI based SQL review" },
    { id: "VCS workflow #GitOps" },
    { id: "Shareable query link" },
    { id: "IM integration" },
    { id: "Inbox notification" },
    { id: "Activity log" },
    { id: "RBAC (Owner, DBA, Developer role)" },
    { id: "Login with GitLab account" },
    { id: "Sync project membership from the linked GitLab project" },
  ],
  mainFeatures: [
    "SLA support",
    "Everything in team plan",
    "Multi-Region / Multi-Tenancy deployment",
    "More to come...",
  ],
};

export const PLANS: Plan[] = [
  FREE_PLAN,
  TEAM_PLAN,
  ENTERPRISE_PLAN,
];
