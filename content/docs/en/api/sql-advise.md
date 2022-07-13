---
title: SQL Advise API
---

<hint-block type="warning">

This OpenAPI is in **Alpha** stage, we may change it in the future.

</hint-block>

The SQL Advise API provides SQL checks based on your schema review policy.

> Before you start, you should configure the schema review policy on a specific environment. Please check [Schema Review](/docs/features/schema-review/overview) for more information.

### Endpoint

**`GET`** `http://localhost:8080/v1/sql/advise`

```bash
curl http://localhost:8080/v1/sql/advise \
  -G --data-urlencode '{SQL statement}' \
  -d 'environment={environment name}' \
  -d 'databaseType={database type}
```

### Query parameters

| Parameter      | Required?    | Description                                                                                                                         | Example                  |
| -------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `environment`  | **Required** | The environment name for your schema review policy. **Case sensitive**                                                              | Dev                      |
| `statement`    | **Required** | The SQL statement.                                                                                                                  | SELECT \* FROM \`table\` |
| `host`         | **Optional** | The instance host. Available values : `MySQL`, `PostgreSQL`, `TiDB`.                                                                | 127.0.0.1                |
| `port`         | **Optional** | The instance port. Available values : `MySQL`, `PostgreSQL`, `TiDB`.                                                                | 3306                     |
| `databaseName` | **Optional** | The database name in the instance.                                                                                                  | DB Name                  |
| `databaseType` | **Optional** | The database type. Required if the port, host and database name is not specified. Available values : `MySQL`, `PostgreSQL`, `TiDB`. | MySQL                    |

Once created the schema review policy in Bytebase UX, you can call the SQL advise API with `environment`, `statement`, and `databaseType` parameters. This will take the SQL check for statements without database catalog information.

You can also create the instance and database in Bytebase UX, then call the API with `environment`, `statement`, `host`, `port`, and `databaseName` parameters. This will connect to the specific database to get the catalog.

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
