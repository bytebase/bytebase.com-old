---
title: Schema Definition Language
---

## MySQL Schema Definition Language Syntax

### CREATE TABLE statements

#### Syntax

```sql
CREATE TABLE [IF NOT EXISTS] table_name (
    {
        column_name column_definition
        | PRIMARY KEY (key_part, ...) [index_option]
        | CONSTRAINT constraint_name FOREIGN KEY (column_name, ...) reference_definition
        | CONSTRAINT constraint_name CHECK (expr) [[NOT] ENFORCED]
    }
)
[table_options]
```

#### Description

`CREATE TABLE` defines a table in the database. Unlike the regular CREATE TABLE statement in MySQL, in MySQL SDL, only columns, PRIMARY KEY, FOREIGN KEY constraints, and CHECK constraints can be defined.

#### Parameters

`table_name`

- The name of the table.

`column_name`

- The name of the column.

`column_definition`

- The column definition. In MySQL SDL, PRIMARY KEY, FOREIGN KEY constraints and CHECK constraints cannot be defined in column_definition. They can only be defined separately.
```sql
column_definition: {
    data_type [NOT NULL | NULL] [DEFAULT {literal | (expr)} ]
      [VISIBLE | INVISIBLE]
      [AUTO_INCREMENT]
      [COMMENT 'string']
      [COLLATE collation_name]
      [COLUMN_FORMAT {FIXED | DYNAMIC | DEFAULT}]
      [ENGINE_ATTRIBUTE [=] 'string']
      [SECONDARY_ENGINE_ATTRIBUTE [=] 'string']
      [STORAGE {DISK | MEMORY}]
  | data_type
      [COLLATE collation_name]
      [GENERATED ALWAYS] AS (expr)
      [VIRTUAL | STORED] [NOT NULL | NULL]
      [VISIBLE | INVISIBLE]
      [COMMENT 'string']
}
```

`key_part`

```sql
key_part: {col_name [(length)] | (expr)} [ASC | DESC]
```

`index_option`
```sql
index_option: {
    KEY_BLOCK_SIZE [=] value
  | index_type
  | WITH PARSER parser_name
  | COMMENT 'string'
  | {VISIBLE | INVISIBLE}
  | ENGINE_ATTRIBUTE [=] 'string'
  | SECONDARY_ENGINE_ATTRIBUTE [=] 'string'
}
```

`reference_definition`

- The reference definition of a FOREIGN KEY. Note that the name of FOREIGN KEY constraints **MUST** be explicitly specified.

```sql
reference_definition:
    REFERENCES tbl_name (key_part,...)
      [MATCH FULL | MATCH PARTIAL | MATCH SIMPLE]
      [ON DELETE reference_option]
      [ON UPDATE reference_option]

reference_option:
    RESTRICT | CASCADE | SET NULL | NO ACTION | SET DEFAULT
```

`CHECK` Constraints

- The CHECK constraint definition. Note that the name of CHECK constraints **MUST** be explicitly specified.

`table_options`

- The table options definition.

```sql
table_options:
    table_option [[,] table_option] ...

table_option: {
    AUTOEXTEND_SIZE [=] value
  | AUTO_INCREMENT [=] value
  | AVG_ROW_LENGTH [=] value
  | [DEFAULT] CHARACTER SET [=] charset_name
  | CHECKSUM [=] {0 | 1}
  | [DEFAULT] COLLATE [=] collation_name
  | COMMENT [=] 'string'
  | COMPRESSION [=] {'ZLIB' | 'LZ4' | 'NONE'}
  | CONNECTION [=] 'connect_string'
  | {DATA | INDEX} DIRECTORY [=] 'absolute path to directory'
  | DELAY_KEY_WRITE [=] {0 | 1}
  | ENCRYPTION [=] {'Y' | 'N'}
  | ENGINE [=] engine_name
  | ENGINE_ATTRIBUTE [=] 'string'
  | INSERT_METHOD [=] { NO | FIRST | LAST }
  | KEY_BLOCK_SIZE [=] value
  | MAX_ROWS [=] value
  | MIN_ROWS [=] value
  | PACK_KEYS [=] {0 | 1 | DEFAULT}
  | PASSWORD [=] 'string'
  | ROW_FORMAT [=] {DEFAULT | DYNAMIC | FIXED | COMPRESSED | REDUNDANT | COMPACT}
  | START TRANSACTION 
  | SECONDARY_ENGINE_ATTRIBUTE [=] 'string'
  | STATS_AUTO_RECALC [=] {DEFAULT | 0 | 1}
  | STATS_PERSISTENT [=] {DEFAULT | 0 | 1}
  | STATS_SAMPLE_PAGES [=] value
  | tablespace_option
}
```

#### Example

```sql
CREATE TABLE book(
    id INT NOT NULL,
    name VARCHAR(20),
    author_id INT,
    -- PRIMARY KEY must be defined separately.
    PRIMARY KEY (id),
    -- FOREIGN KEY constraint must be defined separately.
    -- The name of FOREIGN KEY constraint must be explicitly specified.
    CONSTRAINT fk_id_author_id FOREIGN KEY (author_id) REFERENCES author(id),
    -- CHECK constraint must be defined separately.
    -- The name of CHECK constraint must be explicitly specified.
    CONSTRAINT check_id CHECK (id > 0)
);
```

### CREATE INDEX statements

#### Syntax

```sql
CREATE [UNIQUE | FULLTEXT | SPATIAL] INDEX index_name
    [index_type]
    ON tbl_name (key_part,...)
    [index_option]
    [algorithm_option | lock_option] ...
```

#### Description

`CREATE INDEX` defines an index. Unlike the regular CREATE TABLE statement in MySQL, in MySQL SDL, indexes and unique indexes can only be defined by `CREATE INDEX` statements. MySQL SDL does not allow the definition of index and unique index in CREATE TABLE statements.

#### Parameters

`index_name`

- The name of index.

`index_type`

- The type of index.

```sql
index_type:
    USING {BTREE | HASH}
```

`key_part`
```sql
key_part: {col_name [(length)] | (expr)} [ASC | DESC]
```

`index_option`
```sql
index_option: {
    KEY_BLOCK_SIZE [=] value
  | index_type
  | WITH PARSER parser_name
  | COMMENT 'string'
  | {VISIBLE | INVISIBLE}
  | ENGINE_ATTRIBUTE [=] 'string'
  | SECONDARY_ENGINE_ATTRIBUTE [=] 'string'
}
```

`algorithm_option`
```sql
algorithm_option:
    ALGORITHM [=] {DEFAULT | INPLACE | COPY}
```

`lock_option`
```sql
lock_option:
    LOCK [=] {DEFAULT | NONE | SHARED | EXCLUSIVE}
```

#### Example

```sql
CREATE UNIQUE INDEX uk_book_id_name on book(id, name);
```