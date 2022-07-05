#!/bin/sh
# TODO: use version to fetch the lastest file
FILE="sql_review_config.yaml"
URL="https://raw.githubusercontent.com/ecmadao/bytebase/feat/schema-review-api/frontend/src/types/$FILE"

curl -o $FILE $URL
mv -f $FILE "./common/"

echo "schema review rules updated."
