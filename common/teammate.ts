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
    role: "team.roles.community-manager",
  },
  {
    name: "Zhe",
    role: "team.roles.engineering-intern",
  },
  {
    name: "Zilong",
    role: "team.roles.engineering-intern",
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
    role: "team.roles.engineering-intern",
  },
  {
    name: "Lucy",
    role: "team.roles.community-intern",
  },
  {
    name: "Grace",
    role: "team.roles.community-intern",
  },
  {
    name: "Elon",
    role: "team.roles.engineering",
  },
  {
    name: "Zipeng",
    role: "team.roles.engineering-intern",
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
    name: "Candy",
    role: "team.roles.product-manager",
  },
  {
    name: "Mila",
    role: "team.roles.community-manager",
  },
  {
    name: "Zhengx",
    role: "team.roles.engineering-intern",
  },
  {
    name: "Queeny",
    role: "team.roles.advisor",
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
