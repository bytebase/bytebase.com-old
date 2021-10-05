export type ErrorTag = "All" | "General" | "Compatibility";

export type ErrorItem = {
  code: number;
  hash: string;
  name: string;
  description: string;
  tagList: ErrorTag[];
};

export type ErrorCategory = {
  name: string;
  hash: string;
  list: ErrorItem[];
};
