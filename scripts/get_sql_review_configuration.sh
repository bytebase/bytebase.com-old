#!/bin/sh
# TODO: use version to fetch the lastest file
FILE="sqlReviewConfig.yaml"
URL="https://raw.githubusercontent.com/bytebase/bytebase/main/frontend/src"

curl -o "./common/$FILE" "$URL/types/$FILE"

echo "schema review configuration file updated."

LOCALIZATION_FOLDER="./locales/sql-review"
mkdir -p $LOCALIZATION_FOLDER

curl -o "$LOCALIZATION_FOLDER/en.json" "$URL/locales/sql-review/en-US.json"
curl -o "$LOCALIZATION_FOLDER/zh.json" "$URL/locales/sql-review/zh-CN.json"

echo "schema review localization file updated."