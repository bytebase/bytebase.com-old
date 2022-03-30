import { IContentDocument } from "@nuxt/content/types/content";

interface ContentDocument extends IContentDocument {
  order: number;
  description?: string;
  isHeader?: boolean;
}

interface Document extends ContentDocument {
  level: number;
}

interface DocumentTreeNode {
  path: string;
  document: Document;
  children: DocumentTreeNode[];
  displayChildren: boolean;
}
