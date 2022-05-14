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
  description?: string;
  expandAll?: boolean;
}

interface Document extends ContentDocument {
  level: number;
}

interface DocumentTreeNode {
  title: string;
  path: string;
  type: string;
  children: DocumentTreeNode[];
  displayChildren: boolean;
}
