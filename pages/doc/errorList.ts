import { ErrorCategory } from "./errorTypes";

export const ERROR_LIST: ErrorCategory[] = [
  {
    name: "General",
    hash: "general",
    list: [
      {
        code: 0,
        hash: "0-ok",
        name: "OK",
        description: "Code indicating success",
        tagList: ["General"],
      },
    ],
  },
  {
    name: "Database",
    hash: "database",
    list: [
      {
        code: 101,
        hash: "101-db-connection",
        name: "Failed to connect database",
        description: "Unable to connect database.",
        tagList: ["General"],
      },
    ],
  },
  {
    name: "Backward Compatibility",
    hash: "backward-compatibility",
    list: [
      {
        code: 10001,
        hash: "10001-drop-database",
        name: "DROP DATABASE",
        description: "DROP DATABASE is a backward incompatible migration.",
        tagList: ["Compatibility"],
      },
    ],
  },
];
