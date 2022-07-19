---
title: SQL Advise API
---

<hint-block type="warning">

This OpenAPI is in **Alpha** stage, we may change it in the future.

</hint-block>

The SQL Advise API provides SQL checks based on your schema review policy.

> Before you start, you should configure the schema review policy on a specific environment. Please check [Schema Review](/docs/sql-review/review-rules/overview) for more information.

### Endpoint

**`GET`** `http://localhost:8080/v1/sql/advise`

```bash
curl http://localhost:8080/v1/sql/advise \
  -G --data-urlencode '{SQL statement}' \
  -d 'environment={environment name}' \
  -d 'databaseType={database type}
```

### Query parameters

| Parameter      | Required?    | Description                                                            | Example                  |
| -------------- | ------------ | ---------------------------------------------------------------------- | ------------------------ |
| `environment`  | **Required** | The environment name for your schema review policy. **Case sensitive** | Dev                      |
| `databaseType` | **Required** | The database type. Available values : `MySQL`, `PostgreSQL`, `TiDB`.   | MySQL                    |
| `statement`    | **Required** | The SQL statement.                                                     | SELECT \* FROM \`table\` |

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

- `code`: The error code. Check [error code for advisor](/docs/reference/error-code/advisor) for details.
- `content`: The error message.
- `status`: The SQL check status, should be `SUCCESS`, `WARN` or `ERROR`.
- `title`: The schema review rule type.
  - `OK`: No errors.
  - [`engine.mysql.use-innodb`](/docs/sql-review/review-rules/engine-mysql-use-innodb)
  - [`naming.table`](/docs/sql-review/review-rules/naming-table)
  - [`naming.column`](/docs/sql-review/review-rules/naming-column)
  - [`naming.index.idx`](/docs/sql-review/review-rules/naming-index-idx)
  - [`naming.index.uk`](/docs/sql-review/review-rules/naming-index-uk)
  - [`naming.index.fk`](/docs/sql-review/review-rules/naming-index-fk)
  - [`statement.select.no-select-all`](/docs/sql-review/review-rules/query-select-no-select-all)
  - [`statement.where.require`](/docs/sql-review/review-rules/query-where-require)
  - [`statement.where.no-leading-wildcard-like`](/docs/sql-review/review-rules/query-where-no-leading-wildcard-like)
  - [`table.require-pk`](/docs/sql-review/review-rules/table-require-pk)
  - [`table.no-fk`](/docs/sql-review/review-rules/table-no-fk)
  - [`table.drop-naming-convention`](/docs/sql-review/review-rules/table-drop-naming)
  - [`column.required`](/docs/sql-review/review-rules/column-required)
  - [`schema.backward-compatibility`](/docs/sql-review/review-rules/schema-migration-compatibility)
  - [`database.drop-empty-database`](/docs/sql-review/review-rules/database-drop-empty-db)

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
