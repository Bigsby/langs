#!/bin/sh

echo "true and false is" $(( 1 && 0 ))
echo "true or false is" $(( 1 || 0 ))
echo "true xor false is" $(( 1 ^ 0 ))
echo "not true is" $(( !1 ))