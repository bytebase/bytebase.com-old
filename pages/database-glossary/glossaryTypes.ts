export type Tag = "All" | "General" | "Bytebase" | "MySQL" | "PostgreSQL";

export type Glosssary = {
  name: string;
  description: string;
  reference?: string;
  tagList: Tag[];
};

export type AlphaItem = {
  letter: string;
  list: Glosssary[];
};
