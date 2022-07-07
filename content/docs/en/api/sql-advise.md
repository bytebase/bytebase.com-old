---
title: SQL Advise API
---

The SQL Advise API provides SQL checks based on your schema review policy.

> Before you start, you should configure the schema review policy on a specific environment. Please check [Schema Review](/docs/use-bytebase/schema-review/overview) for more information.

### Endpoint

**`GET`** `http://localhost:8080/v1/sql/advise`

```bash
curl http://localhost:8080/v1/sql/advise \
  -G --data-urlencode '{SQL statement}' \
  -d 'environment={environment name}' \
  -d 'databaseType={database type}
```

### Query parameters

| Parameter    | Required?    | Description                                                            | Example                |
| ------------ | ------------ | ---------------------------------------------------------------------- | ---------------------- |
| environment  | **Required** | The environment name for your schema review policy. **Case sensitive** | Dev                    |
| databaseType | **Required** | The database type. Available values : `MySQL`, `PostgreSQL`, `TiDB`.   | MySQL                  |
| statement    | **Required** | The SQL statement.                                                     | SELECT \* FROM `table` |

### Response body

```json
[
  {
    "code": "number",
    "content": "string",
    "status": "string",
    "title": "string"
  }
]
```

- `code`: The error code. Should be `0` if no errors.
  - `0`: OK
  - `1`: Internal error
  - `2`: Schema review policy not found
  - `101`: Drop database compatibility error
  - `102`: Rename table compatibility error
  - `103`: Drop table compatibility error
  - `104`: Rename column compatibility error
  - `105`: Drop column compatibility error
  - `106`: Add primary key compatibility error
  - `107`: Add unique key compatibility error
  - `108`: Add foreign key compatibility error
  - `109`: Add check compatibility error
  - `110`: Alter check compatibility error
  - `111`: Alter column compatibility error
  - `201`: Statement syntax error
  - `202`: Statement no where error
  - `203`: Statement select all error
  - `204`: Statement leading wildcard like error
  - `301`: Naming table convention mismatch error
  - `302`: Naming column convention mismatch error
  - `303`: Naming index convention mismatch error
  - `304`: Naming unique key convention mismatch error
  - `305`: Naming foreign key convention mismatch error
  - `401`: No required column error
  - `402`: Column can not null error
  - `501`: Not InnoDB engine error
  - `601`: Table no primary key error
- `content`: The error message.
- `status`: The SQL check status, should be `SUCCESS`, `WARN` or `ERROR`
- `title`: The schema review rule type.
  - `OK`: No errors
  - [`engine.mysql.use-innodb`](/docs/features/schema-review/engine-mysql-use-innodb)
  - [`naming.table`](/docs/features/schema-review/naming-table)
  - [`naming.column`](/docs/features/schema-review/naming-column)
  - [`naming.index.idx`](/docs/features/schema-review/naming-index-idx)
  - [`naming.index.uk`](/docs/features/schema-review/naming-index-uk)
  - [`naming.index.fk`](/docs/features/schema-review/naming-index-fk)
  - [`statement.select.no-select-all`](/docs/features/schema-review/query-select-no-select-all)
  - [`statement.where.require`](/docs/features/schema-review/query-where-require)
  - [`statement.where.no-leading-wildcard-like`](/docs/features/schema-review/query-where-no-leading-wildcard-like)
  - [`table.require-pk`](/docs/features/schema-review/table-require-pk)
  - [`column.required`](/docs/features/schema-review/column-required)
  - [`schema.backward-compatibility`](/docs/features/schema-review/schema-migration-compatibility)

### Response Codes

| Code  | Description                                                 |
| ----- | ----------------------------------------------------------- |
| `200` | OK                                                          |
| `400` | One of the provided values in the request query is invalid. |
| `500` | Internal server error                                       |

### Example

Request

```bash
curl http://localhost:8080/v1/sql/advise \
  -G --data-urlencode 'statement=SELECT * FROM `table`' \
  -d environment=Dev \
  -d databaseType=MySQL
```

Response

```json
[
  {
    "status": "ERROR",
    "code": 203,
    "title": "statement.select.no-select-all",
    "content": "\"SELECT * FROM `table`\" uses SELECT all"
  },
  {
    "status": "ERROR",
    "code": 202,
    "title": "statement.where.require",
    "content": "\"SELECT * FROM `table`\" requires WHERE clause"
  }
]
```

Request

```bash
curl http://localhost:8080/v1/sql/advise \
  -G --data-urlencode 'statement=SELECT id FROM `table` WHERE id = 1' \
  -d environment=Dev \
  -d databaseType=MySQL
```

Response

```json
[
  {
    "status": "SUCCESS",
    "code": 0,
    "title": "OK",
    "content": ""
  }
]
```

![openapi-sql-advise](/static/docs/openapi-sql-advise.webp)
