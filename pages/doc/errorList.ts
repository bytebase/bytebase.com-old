import { ErrorCategory } from "./errorTypes";

// List should be kept in sync with https://github.com/bytebase/bytebase/blob/main/frontend/src/types/errorList.ts
export const ERROR_LIST: ErrorCategory[] = [
  {
    name: "General",
    hash: "general",
    list: [
      {
        code: 0,
        hash: "0-ok",
        name: "OK",
        description: "Success",
      },
      {
        code: 1,
        hash: "1-internal",
        name: "Internal error",
        description:
          'Something unexpected happened, you can open a <a href="https://github.com/bytebase/bytebase/issues">GitHub issue</a> or <a href="mailto:support@bytebase.com?subject=Got internal error">contact us</a>.',
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
        description:
          "Please double check your username and password. Also check your firewall setting to make sure your database is network accessible to Bytebase.",
      },
      {
        code: 102,
        hash: "102-statement-syntax",
        name: "Statement syntax error",
        description: "A syntax error in your SQL statement.",
      },
      {
        code: 103,
        hash: "102-statement-execution",
        name: "Statement execution error",
        description:
          'Encountered an error when executing the SQL statement. If the error doesn\'t provide enough context, please open a <a href="https://github.com/bytebase/bytebase/issues">GitHub issue</a> or <a href="mailto:support@bytebase.com?subject=Got internal error">contact us</a>.',
      },
    ],
  },
  {
    name: "Migration",
    hash: "migration",
    list: [
      {
        code: 201,
        hash: "201-migration-schema-missing",
        name: "Missing migration schema",
        description:
          'Bytebase can\'t find the migration schema in the instance. When user successfully adds an instance to Bytebase, Bytebase will try to create a database called "bytebase" in the target instance. This database is the migration schema Bytebase relies on to store the migration history. Without this schema, any schema migration attempt will fail to proceed.',
      },
      {
        code: 202,
        hash: "202-migration-already-applied",
        name: "Statement syntax error",
        description:
          "Bytebase observed that the same migration version has already applied to the target database. It could be multiple users creating the new migration changes around the same period and they pick the same version number.",
      },
      {
        code: 203,
        hash: "203-migration-out-of-order",
        name: "Statement execution error",
        description:
          "Bytebase observed that a higher migration version has already applied to the target database. This normally suggests user doesn't follow sequential order to apply migration changes or there maybe multiple users creating migration changes around the same period.",
      },
      {
        code: 204,
        hash: "204-migration-baseline-missing",
        name: "Missing baseline",
        description:
          'For version control (VCS) based migration, we require the database to establish a basline first. See <a href="https://docs.bytebase.com/use-bytebase/vcs-integration/create-the-first-baseline-migration">help doc</a> for more details.',
      },
    ],
  },
  {
    name: "Backward Incompatible Migration",
    hash: "backward-incompatible-migration",
    list: [
      {
        code: 10001,
        hash: "10001-drop-database",
        name: "DROP DATABASE",
        description:
          "Applications usually specifies database in their connection string. Dropping the database will definitely break those applications.",
      },
      {
        code: 10002,
        hash: "10002-rename-table",
        name: "RENAME TABLE",
        description:
          "Renaming the table will break the code referring that table.",
      },
      {
        code: 10003,
        hash: "10003-drop-table",
        name: "DROP TABLE",
        description:
          "Dropping the table will break the code referring that table.",
      },
      {
        code: 10004,
        hash: "10004-rename-column",
        name: "RENAME COLUMN",
        description:
          "Renaming the column will break the code referring that column.",
      },
      {
        code: 10005,
        hash: "10005-drop-column",
        name: "DROP COLUMN",
        description:
          "Dropping the column will break the code referring that column.",
      },
      {
        code: 10006,
        hash: "10006-add-primary-key",
        name: "ADD PRIMARY KEY",
        description:
          "Primary key requires the candidate key set has unique value and the chosen candidate key set might not meet this requirement.",
      },
      {
        code: 10007,
        hash: "10007-add-unique-key",
        name: "ADD UNIQUE KEY",
        description:
          "Unique key requires the candidate key set has unique value and the chosen candidate key set might not meet this requirement.",
      },
      {
        code: 10008,
        hash: "10008-add-foreign-key",
        name: "ADD FOREIGN KEY",
        description:
          "The existing values on the candidate foreign key and the referenced key might not meet the referential requirements.",
      },
      {
        code: 10009,
        hash: "10009-add-check",
        name: "ADD CHECK",
        description: "The existing value might not meet the check requirement.",
      },
      {
        code: 10010,
        hash: "10010-alter-check",
        name: "ALTER CHECK",
        description: "The existing value might not meet the check requirement.",
      },
      {
        code: 10011,
        hash: "10011-alter-column",
        name: "ALTER COLUMN",
        description:
          "Some ALTER COLUMN change is backward incompatible such as changing the data type from VARCHAR to INT. On the other hand, some change is backward compatible such as changing the database type from INT to BIGINT, or adding a comment and etc. User should review the actual statement.",
      },
    ],
  },
];
