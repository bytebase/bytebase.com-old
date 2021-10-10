import slug from "slug";

export type PostTag =
  | "Announcement"
  | "Database Schema Design"
  | "Getting Started"
  | "Insights";

export function postTagStyle(tag: PostTag): string {
  switch (tag) {
    case "Announcement":
      return "bg-indigo-100 text-indigo-800";
    case "Database Schema Design":
      return "bg-pink-100 text-pink-800";
    case "Getting Started":
      return "bg-green-100 text-green-800";
    case "Insights":
      return "bg-yellow-100 text-yellow-800";
  }
}

export type GlossaryTag =
  | "All"
  | "General"
  | "Bytebase"
  | "MySQL"
  | "PostgreSQL";

export type Glossary = {
  name: string;
  description: string;
  reference?: string;
  tagList: GlossaryTag[];
};

export type AlphaItem = {
  letter: string;
  list: Glossary[];
};

export function glossaryTagStyle(tag: GlossaryTag): string {
  switch (tag) {
    case "All":
      return "";
    case "General":
      return "bg-gray-200 text-gray-800";
    case "Bytebase":
      return "bg-indigo-100 text-indigo-800";
    case "MySQL":
      return "bg-green-100 text-green-800";
    case "PostgreSQL":
      return "bg-yellow-100 text-yellow-800";
  }
}

export const databaseList: string[] = ["MySQL", "PostgreSQL", "TiDB"];

export const vcsList: string[] = ["GitLab"];

export const imList: string[] = [
  "Slack",
  "Discord",
  "Teams",
  "DingTalk(钉钉)",
  "Feishu(飞书)",
  "WeCom(企业微信)",
];

export const featureList: string[] = [
  "SQL review",
  "Schema drift detection",
  "Database schema evolution",
  "Backward compatible schema change",
  "Database schema change",
  "Database schema migration",
  "DDL",
  "Backup and restore",
  "Database-as-Code",
  "Database CI",
  "Database CD",
  "Database CI/CD",
  "Database continous integration",
  "Database continous delivery",
  "GitOps",
];

export type DatabaseFeature = {
  slug: string;
  database: string;
  feature: string;
};

export function databaseFeatureList(): DatabaseFeature[] {
  const list: DatabaseFeature[] = [];
  for (const database of databaseList) {
    for (const feature of featureList) {
      list.push({
        slug: slug([database, feature].join("-")),
        database,
        feature,
      });
    }
  }
  return list;
}

export function databaseFeatureForSlug(theSlug: string): DatabaseFeature {
  for (const item of databaseFeatureList()) {
    if (theSlug == item.slug) {
      return item;
    }
  }
  return {
    slug: "unknown",
    database: "",
    feature: "",
  };
}

export type DatabaseVCS = {
  slug: string;
  database: string;
  vcs: string;
};

export function databaseVCSList(): DatabaseVCS[] {
  const list: DatabaseVCS[] = [];
  for (const database of databaseList) {
    for (const vcs of vcsList) {
      list.push({
        slug: slug([database, vcs].join("-")),
        database,
        vcs,
      });
    }
  }
  return list;
}

export function databaseVCSForSlug(theSlug: string): DatabaseVCS {
  for (const item of databaseVCSList()) {
    if (theSlug == item.slug) {
      return item;
    }
  }
  return {
    slug: "unknown",
    database: "",
    vcs: "",
  };
}

export type DatabaseWebhook = {
  slug: string;
  database: string;
  vcs: string;
  webhook: string;
};

export function databaseWebhookList(): DatabaseWebhook[] {
  const list: DatabaseWebhook[] = [];
  for (const database of databaseList) {
    for (const vcs of vcsList) {
      for (const im of imList) {
        list.push({
          slug: slug([database, vcs, im].join("-")),
          database,
          vcs,
          webhook: im,
        });
      }
    }
  }
  return list;
}

export function databaseWebhookForSlug(theSlug: string): DatabaseWebhook {
  for (const item of databaseWebhookList()) {
    if (theSlug == item.slug) {
      return item;
    }
  }
  return {
    slug: "unknown",
    database: "",
    vcs: "",
    webhook: "",
  };
}
