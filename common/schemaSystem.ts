export enum RuleLevel {
  Disabled = "disabled",
  Error = "error",
  Warning = "warning",
}

export const levels = [
  { id: RuleLevel.Error, name: "error" },
  { id: RuleLevel.Warning, name: "warning" },
  { id: RuleLevel.Disabled, name: "disabled" },
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
  templates: { id: string; tip?: string; }[];
  value?: string;
}

export interface RulePayload {
  [key: string]: StringPayload | StringArrayPayload | TemplatePayload;
}

export interface Rule {
  id: string;
  category: string;
  description: string;
  payload?: RulePayload;
}

export interface SelectedRule extends Rule {
  level: RuleLevel;
}

export interface RuleCategory {
  id: string;
  title: string;
  rules: SelectedRule[];
}

interface EngineRule {
  id: string;
  level: RuleLevel;
  payload?: {
    [key: string]: any;
  };
}

export interface EngineConfiguration {
  version: string;
  rules: EngineRule[];
}

export interface SchemaConfiguration {
  version: string;
  engine: {
    [key: string]: EngineConfiguration;
  };
}

export type EngineType = "mysql";

export interface Engine {
  id: EngineType;
  name: string;
}

export const rules: Rule[] = [
  {
    id: "engine.mysql.use-innodb",
    category: "database",
    description: "Force to use InnoDB as MySQL engine",
  },
  {
    id: "naming.table",
    category: "naming",
    description:
      "Limit the table name format. The default convention is snake_lower_case",
    payload: {
      format: {
        type: PayloadType.String,
        default: "^[a-z]+(_[a-z]+)?$",
      },
    },
  },
  {
    id: "table.require-pk",
    category: "table",
    description: "Force to require a primary key for each table",
  },
  {
    id: "naming.column",
    category: "naming",
    description:
      "Limit the column name format. The default convention is snake_lower_case",
    payload: {
      format: {
        type: PayloadType.String,
        default: "^[a-z]+(_[a-z]+)?$",
      },
    },
  },
  {
    id: "column.required",
    category: "column",
    description: "Define the required columns in each table",
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
    description: "Columns cannot allow null value",
  },
  {
    id: "naming.index",
    category: "naming",
    description: "Limit the index name format",
    payload: {
      pk: {
        type: PayloadType.Template,
        default: "^pk_{{table}}_{{columns}}$",
        templates: [
          {
            id: "table",
            tip: "The table name",
          },
          {
            id: "columns",
            tip: "Index column names, joined by _",
          },
        ],
      },
      uk: {
        type: PayloadType.Template,
        default: "^uk_{{table}}_{{columns}}$",
        templates: [
          {
            id: "table",
            tip: "The table name",
          },
          {
            id: "columns",
            tip: "Index column names, joined by _",
          },
        ],
      },
      idx: {
        type: PayloadType.Template,
        default: "^idx_{{table}}_{{columns}}$",
        templates: [
          {
            id: "table",
            tip: "The table name",
          },
          {
            id: "columns",
            tip: "Index column names, joined by _",
          },
        ],
      },
    },
  },
  {
    id: "query.select.no-select-all",
    category: "query",
    description: "Not allow 'SELECT *'",
  },
  {
    id: "query.where.require",
    category: "query",
    description: "Query must contains 'WHERE' limit",
  },
  {
    id: "query.where.no-leading-wildcard-like",
    category: "query",
    description: "Not allow '%x' in LIKE",
  },
];