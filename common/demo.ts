export interface Feature {
  title: string;
  icon: string;
  bv: string; // the identifier for videos on bilibili.com i.e. https://www.bilibili.com/video/:bv
}

export const FEATURE_LIST: Feature[] = [
  {
    title: "schema-migration-history",
    icon: "Book",
    bv: "BV1P94y1R7Tb",
  },
  {
    title: "sql-review",
    icon: "Eye",
    bv: "BV1AG411x75m",
  },
  {
    title: "multi-tenancy",
    icon: "Group",
    bv: "BV1tB4y1W7pK",
  },
  {
    title: "vcs-integration",
    icon: "Code",
    bv: "BV1qB4y1v7Z8",
  },
];
