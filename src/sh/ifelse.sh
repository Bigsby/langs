
value=1
if [ $value -eq 1 ]
then
    echo "Got true"
else
    echo "Got false"
fi

value=0
if [ $value -eq 1 ]
then
    echo "Got true"
else
    echo "Got false"
fi

result=3
if [ $result -eq  1 ]
then
    echo "Got true"
elif [ $result -eq  2 ]
then
    echo "Got false"
else
    echo "Got if else"
fi