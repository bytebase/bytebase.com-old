#!/bin/sh
FILE="sqlReviewConfig.yaml"
LOCALIZATION_FOLDER="./locales/sql-review"
mkdir -p $LOCALIZATION_FOLDER

VERSION=`cat ./VERSION`
URL="https://raw.githubusercontent.com/bytebase/bytebase/$VERSION/frontend/src"

input=(
    "$URL/types/$FILE"
    "$URL/locales/sql-review/en-US.json"
    "$URL/locales/sql-review/zh-CN.json"
)
output=(
    "./common/$FILE"
    "$LOCALIZATION_FOLDER/en.json"
    "$LOCALIZATION_FOLDER/zh.json"
)

for i in {0..2}
do
    echo "Start to fetch SQL Review config file from ${input[$i]} to ${output[$i]}."
    response=$(curl -w "%{http_code}" -o ${output[$i]} ${input[$i]})
    http_code=$(tail -n1 <<< "$response")

    if [ $http_code != 200 ]
    then
        echo "Failed to download SQL Review config file."
        exit 1
    fi
done

echo "Successfully updated the SQL Review config file."
