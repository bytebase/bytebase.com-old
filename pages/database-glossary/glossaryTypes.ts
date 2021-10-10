export type Tag = "All" | "General" | "Bytebase" | "MySQL" | "PostgreSQL";

export type Glossary = {
  name: string;
  description: string;
  reference?: string;
  tagList: Tag[];
};

export type AlphaItem = {
  letter: string;
  list: Glossary[];
};
