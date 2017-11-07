#!/bin/sh

echo "Is '^[0-9]+$' mathed by '123456'?"

if echo "123456" | grep -oPqc ^[0-9]+$
then
    echo "yes"
else
    echo "no"
fi
echo 

echo "Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'"
echo "abcdef-12345" | grep -oP "^([a-z])+|([0-9])+$" | while read line
do
    echo $line
done