import schemaSystemConfig from "./sqlReviewConfig.yaml";

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

type SchemaRuleEngineType = "MYSQL" | "COMMON";

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

export interface RuleCategory {
  id: CategoryType;
  ruleList: RuleTemplate[];
}

export interface GuidelineTemplate {
  id: string;
  ruleList: RuleTemplate[];
}

export const guidelineTemplateList =
  schemaSystemConfig.templateList as GuidelineTemplate[];

export const convertToCategoryList = (
  ruleList: RuleTemplate[]
): RuleCategory[] => {
  const categoryList = schemaSystemConfig.categoryList as CategoryType[];
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
