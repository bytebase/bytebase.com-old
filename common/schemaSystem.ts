export enum RuleLevel {
  Disabled = "disabled",
  Error = "error",
  Warning = "warning",
}

export const levels = [
  { id: RuleLevel.Error, name: "Error" },
  { id: RuleLevel.Warning, name: "Warning" },
  { id: RuleLevel.Disabled, name: "Disabled" },
];

export enum PayloadType {
  String = "string",
  StringArray = "string[]",
  Template = "template",
}

interface StringPayload {
  type: PayloadType.String;
  default: string;
  value?: string;
}

interface StringArrayPayload {
  type: PayloadType.StringArray;
  default: string[];
  value?: string[];
}

interface TemplatePayload {
  type: PayloadType.Template;
  default: string;
  templates: { id: string; description?: string; }[];
  value?: string;
}

export interface RulePayload {
  [key: string]: StringPayload | StringArrayPayload | TemplatePayload;
}

export type DatabaseType = "mysql" | "common";

export interface Rule {
  id: string;
  category: string;
  database: DatabaseType[];
  description: string;
  payload?: RulePayload;
}

export interface SelectedRule extends Rule {
  level: RuleLevel;
}

export interface RuleCategory {
  id: string;
  name: string;
  rules: SelectedRule[];
}

interface Database {
  id: DatabaseType;
  name: string;
}

export interface GuidelineTemplate {
  id: string;
  tag: string;
  database: Database;
  rules: SelectedRule[];
}

const mysql: Database = {
  id: "mysql",
  name: "MySQL",
};

const ruleList: Rule[] = [
  {
    id: "engine.mysql.use-innodb",
    category: "engine",
    database: ["mysql"],
    description: "Require InnoDB as the storage engine.",
  },
  {
    id: "table.require-pk",
    category: "table",
    database: ["common"],
    description: "Require the table to have a primary key.",
  },
  {
    id: "naming.table",
    category: "naming",
    database: ["common"],
    description:
      "Enforce the table name format. Default snake_lower_case.",
    payload: {
      format: {
        type: PayloadType.String,
        default: "^[a-z]+(_[a-z]+)?$",
      },
    },
  },
  {
    id: "naming.column",
    category: "naming",
    database: ["common"],
    description:
      "Enforce the column name format. Default snake_lower_case.",
    payload: {
      format: {
        type: PayloadType.String,
        default: "^[a-z]+(_[a-z]+)?$",
      },
    },
  },
  {
    id: "naming.index.pk",
    category: "naming",
    database: ["common"],
    description: "Enforce the primary key name format.",
    payload: {
      pk: {
        type: PayloadType.Template,
        default: "^pk_{{table}}_{{column_list}}$",
        templates: [
          {
            id: "table",
            description: "The table name",
          },
          {
            id: "column_list",
            description: "Index column names, joined by _",
          },
        ],
      },
    },
  },
  {
    id: "naming.index.uk",
    category: "naming",
    database: ["common"],
    description: "Enforce the unique key name format.",
    payload: {
      uk: {
        type: PayloadType.Template,
        default: "^uk_{{table}}_{{column_list}}$",
        templates: [
          {
            id: "table",
            description: "The table name",
          },
          {
            id: "column_list",
            description: "Index column names, joined by _",
          },
        ],
      },
    },
  },
  {
    id: "naming.index.idx",
    category: "naming",
    database: ["common"],
    description: "Enforce the index name format.",
    payload: {
      idx: {
        type: PayloadType.Template,
        default: "^idx_{{table}}_{{column_list}}$",
        templates: [
          {
            id: "table",
            description: "The table name",
          },
          {
            id: "column_list",
            description: "Index column names, joined by _",
          },
        ],
      },
    },
  },
  {
    id: "column.required",
    category: "column",
    database: ["common"],
    description: "Enforce the required columns in each table.",
    payload: {
      columns: {
        type: PayloadType.StringArray,
        default: ["id", "created_ts", "updated_ts", "creator_id", "updater_id"],
      },
    },
  },
  {
    id: "column.no-null",
    category: "column",
    database: ["common"],
    description: "Columns cannot have NULL value.",
  },
  {
    id: "query.select.no-select-all",
    category: "query",
    database: ["common"],
    description: "Disallow 'SELECT *'.",
  },
  {
    id: "query.where.require",
    category: "query",
    database: ["common"],
    description: "Require 'WHERE' clause.",
  },
  {
    id: "query.where.no-leading-wildcard-like",
    category: "query",
    database: ["common"],
    description: "Disallow leading '%' in LIKE, e.g. LIKE foo = '%x' is not allowed.",
  },
];

export const guidelineTemplateList: GuidelineTemplate[] = [
  {
    id: "mysql.prod",
    tag: "Prod",
    database: mysql,
    rules: ruleList.map(r => ({ ...r, level: RuleLevel.Error })),
  },
  {
    id: "mysql.dev",
    tag: "Dev",
    database: mysql,
    rules: [
      "engine.mysql.use-innodb",
      "table.require-pk",
      "naming.table",
      "naming.column",
      "naming.index.pk",
      "naming.index.uk",
      "naming.index.idx",
      "column.required",
      "column.no-null",
    ].reduce((res, id) => {
      const rule = ruleList.find((r) => r.id === id);
      if (!rule) {
        return res;
      }
      res.push({
        ...rule,
        level: RuleLevel.Warning,
      });
      return res;
    }, [] as SelectedRule[]),
  }
];
