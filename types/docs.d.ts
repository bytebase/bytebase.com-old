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
}

interface Document extends ContentDocument {
  level: number;
}

interface DocumentTreeNode {
  title: string;
  path: string;
  children: DocumentTreeNode[];
  displayChildren: boolean;
}
