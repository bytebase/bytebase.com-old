export type PostTag =
  | "Announcement"
  | "Case Study"
  | "Engineering"
  | "Explanation"
  | "How-To"
  | "Industry";

export function postTagStyle(tag: PostTag): string {
  switch (tag) {
    case "Announcement":
      return "bg-indigo-100 text-indigo-800";
    case "Case Study":
      return "bg-cyan-100 text-cyan-800";
    case "Engineering":
      return "bg-gray-100 text-gray-800";
    case "Explanation":
      return "bg-green-100 text-green-800";
    case "How-To":
      return "bg-fuchsia-100 text-fuchsia-800";
    case "Industry":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-blue-100 text-blue-800";
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
