#!/bin/sh
SCHEMA_FILE="sql-review-schema.yaml"
PROD_TEMPLATE="sql-review.prod.yaml"
DEV_TEMPLATE="sql-review.dev.yaml"

LOCALIZATION_FOLDER="./locales"
mkdir -p "$LOCALIZATION_FOLDER/sql-review"
mkdir -p "$LOCALIZATION_FOLDER/subscription"

CONSOLE_VERSION_FOR_PRICING="main"
CONSOLE_VERSION_FOR_SQL_REVIEW="main"
URL="https://raw.githubusercontent.com/bytebase/bytebase"

input=(
    # SQL review files
    "$URL/$CONSOLE_VERSION_FOR_SQL_REVIEW/frontend/src/types/$SCHEMA_FILE"
    "$URL/$CONSOLE_VERSION_FOR_SQL_REVIEW/backend/plugin/advisor/config/$PROD_TEMPLATE"
    "$URL/$CONSOLE_VERSION_FOR_SQL_REVIEW/backend/plugin/advisor/config/$DEV_TEMPLATE"
    "$URL/$CONSOLE_VERSION_FOR_SQL_REVIEW/frontend/src/locales/sql-review/en-US.json"
    "$URL/$CONSOLE_VERSION_FOR_SQL_REVIEW/frontend/src/locales/sql-review/zh-CN.json"
    # subscription files
    "$URL/$CONSOLE_VERSION_FOR_PRICING/frontend/src/types/plan.yaml"
    "$URL/$CONSOLE_VERSION_FOR_PRICING/frontend/src/locales/subscription/en-US.json"
    "$URL/$CONSOLE_VERSION_FOR_PRICING/frontend/src/locales/subscription/zh-CN.json"
)
output=(
    # SQL review files
    "./common/$SCHEMA_FILE"
    "./common/$PROD_TEMPLATE"
    "./common/$DEV_TEMPLATE"
    "$LOCALIZATION_FOLDER/sql-review/en.json"
    "$LOCALIZATION_FOLDER/sql-review/zh.json"
    # subscription files
    "./common/plan.yaml"
    "$LOCALIZATION_FOLDER/subscription/en.json"
    "$LOCALIZATION_FOLDER/subscription/zh.json"
)

for (( i=0; i<${#input[@]}; i++ ));
do
    echo "Start to fetch the SQL Review config file from ${input[$i]} to ${output[$i]}."
    response=$(curl -w "%{http_code}" -o ${output[$i]} ${input[$i]} --retry 3 --retry-all-errors)
    http_code=$(tail -n1 <<< "$response")

    if [ $http_code != 200 ]
    then
        echo "Failed to download the SQL Review config file from ${input[$i]}."
        exit 1
    fi
done

echo "Successfully updated the SQL Review config file."
