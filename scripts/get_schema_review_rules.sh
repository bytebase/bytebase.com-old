#!/bin/sh
# TODO: use version to fetch the lastest file
FILE="sqlReviewConfig.yaml"
URL="https://raw.githubusercontent.com/bytebase/bytebase/main/frontend/src/types/$FILE"

curl -o $FILE $URL
mv -f $FILE "./common/"

echo "schema review configuration file updated."
