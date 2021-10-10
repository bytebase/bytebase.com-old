import slug from "slug";

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
  "Schema change",
  "Schema migration",
  "Database schema evolution",
  "Backward compatible schema change",
  "Database migration",
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

export const softwareList: string[] = [
  "Java",
  "Python",
  "Go",
  "Golang",
  "C++",
  "C#",
  "PHP",
  "Ruby",
  "Perl",
  "Rust",
  "DigitalOcean",
  "AWS",
  "RDS",
  "Cloud SQL",
  "Google Cloud",
  "Azure",
  "AliCloud",
];

export const alternativeList: string[] = [
  "Liquibase",
  "Flyway",
  "golang-migrate",
  "SQLAlchemy",
  "Active Record Migrations",
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

export type DatabaseSoftware = {
  slug: string;
  database: string;
  feature: string;
  software: string;
};

export function databaseSoftwareList(): DatabaseSoftware[] {
  const list: DatabaseSoftware[] = [];
  for (const database of databaseList) {
    for (const feature of featureList) {
      for (const software of softwareList) {
        list.push({
          slug: slug([software, database, feature].join("-")),
          database,
          feature,
          software,
        });
      }
    }
  }
  return list;
}

export function databaseSoftwareForSlug(theSlug: string): DatabaseSoftware {
  for (const item of databaseSoftwareList()) {
    if (theSlug == item.slug) {
      return item;
    }
  }
  return {
    slug: "unknown",
    database: "",
    feature: "",
    software: "",
  };
}

export type DatabaseAlternative = {
  slug: string;
  database: string;
  alternative: string;
};

export function databaseAlternativeList(): DatabaseAlternative[] {
  const list: DatabaseAlternative[] = [];
  for (const alternative of alternativeList) {
    for (const database of databaseList) {
      list.push({
        slug: slug([alternative, database].join("-")),
        database,
        alternative,
      });
    }
  }
  return list;
}

export function databaseAlternativeForSlug(
  theSlug: string
): DatabaseAlternative {
  for (const item of databaseAlternativeList()) {
    if (theSlug == item.slug) {
      return item;
    }
  }
  return {
    slug: "unknown",
    database: "",
    alternative: "",
  };
}
