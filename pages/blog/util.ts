export type PostTag =
  | "Announcement"
  | "Database Schema Design"
  | "Getting Started";

export function tagStyle(tag: PostTag): string {
  switch (tag) {
    case "Announcement":
      return "bg-indigo-100 text-indigo-800";
    case "Database Schema Design":
      return "bg-pink-100 text-pink-800";
    case "Getting Started":
      return "bg-green-100 text-green-800";
  }
}
