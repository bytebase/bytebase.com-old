import schemaSystemConfig from "./schemaSystemConfig.json";

export enum RuleLevel {
  DISABLED = "DISABLED",
  ERROR = "ERROR",
  WARNING = "WARNING",
}

export const LEVEL_LIST = [
  RuleLevel.ERROR,
  RuleLevel.WARNING,
  RuleLevel.DISABLED,
];

interface StringPayload {
  type: "STRING";
  default: string;
  value?: string;
}

interface StringArrayPayload {
  type: "STRING_ARRAY";
  default: string[];
  value?: string[];
}

interface TemplatePayload {
  type: "TEMPLATE";
  default: string;
  templateList: string[];
  value?: string;
}

export interface RuleConfigComponent {
  key: string;
  payload: StringPayload | TemplatePayload | StringArrayPayload;
}

// export type DatabaseType = "mysql" | "common";
export type SchemaRuleEngineType = "MYSQL" | "COMMON";

// The category type for rule template
export type CategoryType =
  | "ENGINE"
  | "NAMING"
  | "STATEMENT"
  | "TABLE"
  | "COLUMN"
  | "SCHEMA";

export interface RuleTemplate {
  type: string;
  category: CategoryType;
  engine: SchemaRuleEngineType;
  componentList: RuleConfigComponent[];
  level: RuleLevel;
}

export const ruleTemplateList = schemaSystemConfig.rule_list as RuleTemplate[];

export interface RuleCategory {
  id: CategoryType;
  ruleList: RuleTemplate[];
}

interface Database {
  id: SchemaRuleEngineType;
  name: string;
}

export interface GuidelineTemplate {
  id: string;
  tag: string;
  database: Database;
  ruleList: RuleTemplate[];
}

const mysql: Database = {
  id: "MYSQL",
  name: "MySQL",
};

const getRuleListWithLevel = (
  typeList: string[],
  level: RuleLevel
): RuleTemplate[] => {
  return typeList.reduce((res, ruleType) => {
    const rule = ruleTemplateList.find((r) => r.type === ruleType);
    if (!rule) {
      return res;
    }
    res.push({
      ...rule,
      level,
    });
    return res;
  }, [] as RuleTemplate[]);
};

export const guidelineTemplateList: GuidelineTemplate[] = [
  {
    id: "mysql.prod",
    tag: "Prod",
    database: mysql,
    ruleList: [
      ...getRuleListWithLevel(
        [
          "engine.mysql.use-innodb",
          "table.require-pk",
          "statement.select.no-select-all",
          "statement.where.require",
          "statement.where.no-leading-wildcard-like",
        ],
        RuleLevel.ERROR
      ),
      ...getRuleListWithLevel(
        [
          "naming.table",
          "naming.column",
          "naming.index.uk",
          "naming.index.idx",
          "naming.index.fk",
          "column.required",
          "column.no-null",
          "schema.backward-compatibility",
        ],
        RuleLevel.WARNING
      ),
    ],
  },
  {
    id: "mysql.dev",
    tag: "Dev",
    database: mysql,
    ruleList: [
      ...getRuleListWithLevel(
        ["engine.mysql.use-innodb", "table.require-pk"],
        RuleLevel.ERROR
      ),
      ...getRuleListWithLevel(
        [
          "naming.table",
          "naming.column",
          "naming.index.uk",
          "naming.index.idx",
          "naming.index.fk",
          "column.required",
          "column.no-null",
          "statement.select.no-select-all",
          "statement.where.require",
          "statement.where.no-leading-wildcard-like",
          "schema.backward-compatibility",
        ],
        RuleLevel.WARNING
      ),
    ],
  },
];

export const convertToCategoryList = (
  ruleList: RuleTemplate[]
): RuleCategory[] => {
  const categoryList = schemaSystemConfig.category_list as CategoryType[];
  const categoryOrder = categoryList.reduce((map, category, index) => {
    map.set(category, index);
    return map;
  }, new Map<CategoryType, number>());

  const dict = ruleList.reduce((dict, rule) => {
    if (!dict[rule.category]) {
      const id = rule.category.toLowerCase();
      dict[rule.category] = {
        id: rule.category,
        ruleList: [],
      };
    }
    dict[rule.category].ruleList.push(rule);
    return dict;
  }, {} as { [key: string]: RuleCategory });

  return Object.values(dict).sort(
    (c1, c2) =>
      (categoryOrder.get(c2.id as CategoryType) || 0) -
      (categoryOrder.get(c1.id as CategoryType) || 0)
  );
};

export const getRuleLocalizationKey = (type: string): string => {
  return type.split(".").join("-");
};

// export const getRuleLocalization = (
//   type: string
// ): { title: string; description: string } => {
//   const { t } = useI18n();
//   const key = getRuleLocalizationKey(type);

//   const title = t(`schema-review-policy.rule.${key}.title`);
//   const description = t(`schema-review-policy.rule.${key}.description`);

//   return {
//     title,
//     description,
//   };
// };
