#!/bin/sh

value=1

while [ $value -lt 10 ] 
do
    echo $value
    value=$(($value + 1))
done