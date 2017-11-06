#!/bin/sh

if [ 1 -eq 2 ]; then result="true"; else result="false"; fi
echo "1 equals 2 is $result"

if [ 1 -ne 2 ]; then result="true"; else result="false"; fi
echo "1 not equals 2 is $result"

if [ 1 -gt 2 ]; then result="true"; else result="false"; fi
echo "1 larger than 2 is $result"

if [ 1 -ge 2 ]; then result="true"; else result="false"; fi
echo "1 larger than or equals 2 is $result"

if [ 1 -lt 2 ]; then result="true"; else result="false"; fi
echo "1 less than 2 is $result"

if [ 1 -le 2 ]; then result="true"; else result="false"; fi
echo "1 less than or equals 2 is $result"