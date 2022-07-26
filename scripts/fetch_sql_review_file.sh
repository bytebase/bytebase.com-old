#!/bin/sh
SCHEMA_FILE="sql-review-schema.yaml"
PROD_TEMPLATE="sql-review.mysql.prod.yaml"
DEV_TEMPLATE="sql-review.mysql.dev.yaml"

LOCALIZATION_FOLDER="./locales/sql-review"
mkdir -p $LOCALIZATION_FOLDER

# TODO: change to version after next release
# VERSION=`cat ./VERSION`
VERSION="main"
URL="https://raw.githubusercontent.com/bytebase/bytebase/$VERSION"

input=(
    "$URL/frontend/src/types/$SCHEMA_FILE"
    "$URL/plugin/advisor/config/$PROD_TEMPLATE"
    "$URL/plugin/advisor/config/$DEV_TEMPLATE"
    "$URL/frontend/src/locales/sql-review/en-US.json"
    "$URL/frontend/src/locales/sql-review/zh-CN.json"
)
output=(
    "./common/$SCHEMA_FILE"
    "./common/$PROD_TEMPLATE"
    "./common/$DEV_TEMPLATE"
    "$LOCALIZATION_FOLDER/en.json"
    "$LOCALIZATION_FOLDER/zh.json"
)

for i in {0..2}
do
    echo "Start to fetch the SQL Review config file from ${input[$i]} to ${output[$i]}."
    response=$(curl -w "%{http_code}" -o ${output[$i]} ${input[$i]})
    http_code=$(tail -n1 <<< "$response")

    if [ $http_code != 200 ]
    then
        echo "Failed to download the SQL Review config file from ${input[$i]}."
        exit 1
    fi
done

echo "Successfully updated the SQL Review config file."
