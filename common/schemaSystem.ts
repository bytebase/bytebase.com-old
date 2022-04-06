export enum RuleLevel {
  Error = "error",
  Warning = "warning",
}

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
  dbVersion: string;
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
  version: string;
}

export const engines: Engine[] = [
  {
    id: "mysql",
    name: "MySQL",
    version: "8.0.28",
  },
];

export const rules: Rule[] = [
  {
    id: "mysql.engine.use-innodb",
    dbVersion: "8.0.28",
    category: "database",
    description: "Force to use InnoDB as database engine",
  },
  {
    id: "mysql.table.naming-convention",
    dbVersion: "8.0.28",
    category: "table",
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
    id: "mysql.table.require-pk",
    dbVersion: "8.0.28",
    category: "table",
    description: "Force to require a primary key for each table",
  },
  {
    id: "mysql.column.naming-convention",
    dbVersion: "8.0.28",
    category: "column",
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
    id: "mysql.column.required-columns",
    dbVersion: "8.0.28",
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
    id: "mysql.column.not-allow-null",
    dbVersion: "8.0.28",
    category: "column",
    description: "Columns cannot allow null value",
  },
  {
    id: "mysql.index.naming-convention",
    dbVersion: "8.0.28",
    category: "index",
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
    id: "mysql.select.no-select-all",
    dbVersion: "8.0.28",
    category: "query",
    description: "Not allow 'SELECT *'",
  },
  {
    id: "mysql.select.require-where",
    dbVersion: "8.0.28",
    category: "query",
    description: "Query must contains 'WHERE' limit",
  },
  {
    id: "mysql.where.no-left-like",
    dbVersion: "8.0.28",
    category: "query",
    description: "Not allow '%x' in LIKE",
  },
  {
    id: "mysql.where.no-all-like",
    dbVersion: "8.0.28",
    category: "query",
    description: "Not allow '%x%' in LIKE",
  },
];