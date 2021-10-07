export type ErrorItem = {
  code: number;
  hash: string;
  name: string;
  description: string;
};

export type ErrorCategory = {
  name: string;
  hash: string;
  list: ErrorItem[];
};
