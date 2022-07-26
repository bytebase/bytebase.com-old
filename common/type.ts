export type PostTag = "Announcement" | "Education" | "Productivity";

export function postTagStyle(tag: PostTag): string {
  switch (tag) {
    case "Announcement":
      return "bg-indigo-100 text-indigo-800";
    case "Education":
      return "bg-green-100 text-green-800";
    case "Productivity":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
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
