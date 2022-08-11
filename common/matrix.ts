import slug from "slug";

export const databaseList: string[] = [
  "MySQL",
  "PostgreSQL",
  "TiDB",
  "Snowflake",
  "ClickHouse",
];

export const vcsList: string[] = ["GitLab", "GitHub"];

export const imList: string[] = [
  "Slack",
  "Discord",
  "Teams",
  "DingTalk",
  "Lark",
  "WeCom",
];

export const featureList: string[] = [
  "SQL Review",
  "SQL Editor",
  "Syntax check",
  "Schema change",
  "Schema migration",
  "Database migration",
  "Database schema change",
  "Database schema migration",
  "Database version control",
  "Database change management",
  "Database source control",
  "Database-as-Code",
  "Database CI/CD",
  "Database DevOps",
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
