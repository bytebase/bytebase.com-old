#!/bin/sh
# TODO: use version to fetch the lastest file
FILE="sqlReviewConfig.yaml"
URL="https://raw.githubusercontent.com/bytebase/bytebase/main/frontend/src/types/$FILE"

curl -o "./common/$FILE" $URL

echo "schema review configuration file updated."

LOCALIZATION_FOLDER="./locales/sql-review"
mkdir -p $LOCALIZATION_FOLDER
# TODO: change the url
curl -o "$LOCALIZATION_FOLDER/en.json" "https://raw.githubusercontent.com/ecmadao/bytebase/chore/schema-review-api/frontend/src/locales/sql-review/en-US.json"
curl -o "$LOCALIZATION_FOLDER/zh.json" "https://raw.githubusercontent.com/ecmadao/bytebase/chore/schema-review-api/frontend/src/locales/sql-review/zh-CN.json"

echo "schema review localization file updated."