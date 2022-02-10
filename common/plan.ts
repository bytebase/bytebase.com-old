
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
  // Plan desc and feature
  title: string;
  description: string;
  features: { id: string; content?: string, tooltip?: string }[];
  mainFeatures: string[];
}

export const FEATURE_SECTIONS = [
  {
    id: "Database Management",
    features: [
      "Instance",
      "Schema change",
      "Migration history",
      "SQL Editor",
      "Database backup / restore",
      "Archiving",
      "SQL check",
      "Anomaly detection",
      "Review and backup policy",
      "Multi-Region / Multi-Tenancy",
    ],
  },
  {
    id: "Collaboration",
    features: [
      "UI based SQL review",
      "GitOps workflow",
      "SQL review commenting",
      "IM integration",
      "Inbox notification",
    ],
  },
  {
    id: "Admin & Security",
    features: ["RBAC (Owner, DBA, Developer role)", "Activity Log"],
  },
];

const FREE_PLAN: Plan = {
  // Plan meta data
  type: PlanType.FREE,
  trialDays: 0,
  unitPrice: "0",
  trialPrice: 0,
  pricePerInstancePerMonth: 0,
  // Plan desc and feature
  title: "Free",
  description: "Personal project or small team, no DBA",
  features: [
    { id: "Instance", content: "Up to 5" },
    { id: "Schema change" },
    { id: "Migration history" },
    { id: "SQL Editor" },
    { id: "Database backup/restore" },
    { id: "Archiving" },
    { id: "SQL check", content: "Basic" },
    { id: "Anomaly detection", content: "Basic" },
    { id: "UI based SQL review" },
    { id: "GitOps workflow" },
    { id: "SQL review commenting" },
    { id: "IM integration" },
    { id: "Inbox notification" },
    { id: "Activity Log" },
    { id: "UI based SQL review" },
  ],
  mainFeatures: [
    "Community support",
    "Basic SQL check",
    "Basic anomaly detection",
    "GitLab integration #GitOps",
    "IM integration (e.g. Slack, Discord and etc)",
  ],
};

const TEAM_PLAN: Plan = {
  // Plan meta data
  label: "Beta",
  type: PlanType.TEAM,
  trialDays: 7,
  unitPrice: "1740",
  trialPrice: 7,
  pricePerInstancePerMonth: 29,
  // Plan desc and feature
  title: "Team",
  description: "Medium size team, has dedicated DBA or TL with management needs",
  features: [
    { id: "Instance", content: "5 ~ unlimited" },
    { id: "Schema change" },
    { id: "Migration history" },
    { id: "SQL Editor" },
    { id: "Database backup / restore" },
    { id: "Archiving" },
    {
      id: "SQL check",
      content: "Advanced",
      tooltip: "e.g. Backward compatibility check"
    },
    {
      id: "Anomaly detection",
      content: "Advanced",
      tooltip: "e.g. Drift detection"
    },
    { id: "Review and backup policy" },
    { id: "UI based SQL review" },
    { id: "GitOps workflow" },
    { id: "SQL review commenting" },
    { id: "IM integration" },
    { id: "Inbox notification" },
    { id: "Activity Log" },
    { id: "RBAC (Owner, DBA, Developer role)" },
  ],
  mainFeatures: [
    "Everything in free plan",
    "Priority support",
    "DBA and Developer roles",
    "Advanced SQL check",
    "Advanced anomaly detection",
    "Review and backup policy",
  ],
};

const ENTERPRISE_PLAN: Plan = {
  // Plan meta data
  label: "Contact us",
  type: PlanType.ENTERPRISE,
  trialDays: 7,
  unitPrice: "11940",
  trialPrice: 0,
  pricePerInstancePerMonth: 199,
  // Plan desc and feature
  title: "Enterprise",
  description: "Large organization, has dedicated DBA group",
  features: [
    { id: "Instance", content: "Customized" },
    { id: "Schema change" },
    { id: "Migration history" },
    { id: "SQL Editor" },
    { id: "Database backup / restore" },
    { id: "Archiving" },
    {
      id: "SQL check",
      content: "Advanced",
      tooltip: "e.g. Backward compatibility check"
    },
    {
      id: "Anomaly detection",
      content: "Advanced",
      tooltip: "e.g. Drift detection"
    },
    { id: "Review and backup policy" },
    { id: "Multi-Region / Multi-Tenancy" },
    { id: "UI based SQL review" },
    { id: "GitOps workflow" },
    { id: "SQL review commenting" },
    { id: "IM integration" },
    { id: "Inbox notification" },
    { id: "Activity Log" },
    { id: "RBAC (Owner, DBA, Developer role)" },
  ],
  mainFeatures: [
    "Everything in team plan",
    "Priority support",
    "Customized instances",
    "Multi-Region / Multi-Tenancy",
    "SLA with dedicated support",
  ],
};

export const PLANS: Plan[] = [
  FREE_PLAN,
  TEAM_PLAN,
  ENTERPRISE_PLAN,
];
