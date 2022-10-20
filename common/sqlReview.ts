import sqlReviewSchema from "./sql-review-schema.yaml";
import sqlReviewProdTemplate from "./sql-review.prod.yaml";
import sqlReviewDevTemplate from "./sql-review.dev.yaml";

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

interface NumberPayload {
  type: "NUMBER";
  default: number;
  value?: number;
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

interface BooleanPayload {
  type: "BOOLEAN";
  default: boolean;
  value?: boolean;
}

export interface RuleConfigComponent {
  key: string;
  payload:
    | StringPayload
    | NumberPayload
    | TemplatePayload
    | StringArrayPayload
    | BooleanPayload;
}

// The category type for rule template
export type CategoryType =
  | "ENGINE"
  | "NAMING"
  | "STATEMENT"
  | "TABLE"
  | "COLUMN"
  | "SCHEMA"
  | "DATABASE"
  | "INDEX"
  | "SYSTEM";

export interface RuleTemplate {
  type: string;
  category: CategoryType;
  engineList: string[];
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

// Build the frontend template list based on schema and template.
export const guidelineTemplateList: GuidelineTemplate[] = (function () {
  const ruleSchemaMap = (sqlReviewSchema.ruleList as RuleTemplate[]).reduce(
    (map, ruleSchema) => {
      map.set(ruleSchema.type, ruleSchema);
      return map;
    },
    new Map<string, RuleTemplate>()
  );
  const templateList = [sqlReviewProdTemplate, sqlReviewDevTemplate] as {
    id: string;
    ruleList: {
      type: string;
      level: RuleLevel;
      payload?: { [key: string]: any };
    }[];
  }[];

  return templateList.map((template) => {
    const ruleList: RuleTemplate[] = [];

    for (const rule of template.ruleList) {
      const ruleTemplate = ruleSchemaMap.get(rule.type);
      if (!ruleTemplate) {
        continue;
      }

      // Using template rule payload to override the component list.
      const componentList = ruleTemplate.componentList.map((component) => {
        if (rule.payload && rule.payload[component.key]) {
          return {
            ...component,
            payload: {
              ...component.payload,
              default: rule.payload[component.key],
            },
          };
        }
        return component;
      });
      ruleList.push({
        ...ruleTemplate,
        level: rule.level,
        componentList,
      });
    }

    return {
      id: template.id,
      ruleList,
    };
  });
})();

export const convertToCategoryList = (
  ruleList: RuleTemplate[]
): RuleCategory[] => {
  const categoryList = sqlReviewSchema.categoryList as CategoryType[];
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
