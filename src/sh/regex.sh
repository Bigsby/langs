#!/bin/sh

echo "Is '^[0-9]+$' mathed by '123456'?"

if echo "123456" | grep -oPqc ^[0-9]+$
then
    echo "yes"
else
    echo "no"
fi

echo "Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'"
matchesCount=$(echo "abcdef-12345" | grep -oP "^([a-z])+|([0-9])+$" | wc -w)
echo "Found $matchesCount groups."
matchIndex=0
echo "abcdef-12345" | grep -oP "^([a-z])+|([0-9])+$"  | while read line
do
    echo "[$matchIndex] - $line"
    matchIndex=$(($matchCount + 1))
done