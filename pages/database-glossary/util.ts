export type BlogTag = "General" | "Bytebase" | "MySQL" | "PostgreSQL";

export function tagStyle(tag: BlogTag): string {
  switch (tag) {
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
