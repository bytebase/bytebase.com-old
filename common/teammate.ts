import { camelCase } from "lodash";

const teammateList = [
  {
    name: "Tianzhou",
    role: "team.roles.cofounder-ceo",
  },
  {
    name: "Danny",
    role: "team.roles.cofounder-cto",
  },
  {
    name: "Ningjing",
    role: "team.roles.developer-advocate",
  },
  {
    name: "Zhe",
    role: "team.roles.intern",
  },
  {
    name: "Zilong",
    role: "team.roles.intern",
    emeritus: true,
  },
  {
    name: "Yunwei",
    role: "team.roles.engineering",
    emeritus: true,
  },
  {
    name: "007",
    role: "team.roles.special-agent",
  },
  {
    name: "Ji",
    role: "team.roles.engineering",
  },
  {
    name: "Edward",
    role: "team.roles.engineering",
  },
  {
    name: "Steven",
    role: "team.roles.intern",
  },
  {
    name: "Ray",
    role: "team.roles.intern",
    emeritus: true,
  },
  {
    name: "Qiaosheng",
    role: "team.roles.intern",
    emeritus: true,
  },
  {
    name: "Elon",
    role: "team.roles.engineering",
    emeritus: true,
  },
  {
    name: "Lucy",
    role: "team.roles.intern",
    emeritus: true,
  },
  {
    name: "Junyi",
    role: "team.roles.engineering",
  },
  {
    name: "Changyu",
    role: "team.roles.solution-architect",
  },
  {
    name: "Zipeng",
    role: "team.roles.intern",
  },
  {
    name: "Candy",
    role: "team.roles.product-manager",
  },
  {
    name: "Mila",
    role: "team.roles.product-marketing",
  },
  {
    name: "Queeny",
    role: "team.roles.advisor",
    emeritus: true,
  },
  {
    name: "Xiong",
    role: "team.roles.intern",
    emeritus: true,
  },
  {
    name: "Grace",
    role: "team.roles.intern",
    emeritus: true,
  },
];

export const getTeammateByName = (name: string) => {
  for (const teammate of teammateList) {
    if (camelCase(teammate.name) === camelCase(name)) {
      return teammate;
    }
  }

  return null;
};

export default teammateList;
