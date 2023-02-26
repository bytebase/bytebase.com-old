export type PostTag =
  | "Announcement"
  | "Case Study"
  | "Engineering"
  | "Explanation"
  | "How-To"
  | "Industry"
  | "Tutorial";

export function postTagStyle(tag: PostTag): string {
  switch (tag) {
    case "Announcement":
      return "bg-fuchsia-100 text-fuchsia-800";
    case "Case Study":
      return "bg-cyan-100 text-cyan-800";
    case "Engineering":
      return "bg-gray-100 text-gray-800";
    case "Explanation":
      return "bg-blue-100 text-blue-800";
    case "How-To":
      return "bg-fuchsia-100 text-fuchsia-800";
    case "Industry":
      return "bg-yellow-100 text-yellow-800";
    case "Tutorial":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export type Integration =
  | "ClickHouse"
  | "GitHub"
  | "GitLab"
  | "MongoDB"
  | "MySQL"
  | "PostgreSQL"
  | "Snowflake"
  | "Spanner"
  | "Terraform"
  | "TiDB";

export function integrationLogo(integration: Integration): string {
  switch (integration) {
    case "ClickHouse":
      return "db-clickhouse.webp";
    case "GitHub":
      return "github-logo.webp";
    case "GitLab":
      return "gitlab-logo.webp";
    case "MongoDB":
      return "db-mongodb.webp";
    case "MySQL":
      return "db-mysql.webp";
    case "PostgreSQL":
      return "db-postgres.webp";
    case "Snowflake":
      return "db-snowflake.webp";
    case "Spanner":
      return "db-spanner.webp";
    case "Terraform":
      return "terraform-logo.webp";
    case "TiDB":
      return "db-tidb.webp";
    default:
      return "";
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

export type TutorialLevel = "Beginner" | "Intermediate" | "Advanced";

export function tutorialTagStyle(level: TutorialLevel): string {
  switch (level) {
    case "Beginner":
      return "bg-blue-100 text-blue-800";
    case "Intermediate":
      return "bg-green-100 text-green-800";
    case "Advanced":
      return "bg-yellow-100 text-yellow-800";
  }
}
