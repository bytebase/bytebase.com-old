import { IContentDocument } from "@nuxt/content/types/content";

interface DocumentBodyNode {
  type: string;
  value: string;
  tag: string;
  children: DocumentBodyNode[];
  props: any;
}

interface ContentDocument extends IContentDocument {
  body: DocumentBodyNode;
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
