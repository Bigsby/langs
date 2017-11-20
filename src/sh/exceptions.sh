#!/bin/sh

DoStuff(){
    if [ $1 -eq 1 ]
    then
        return 1
    else
        echo "Doing stuff!"
        return 0
    fi
}

{ 
    DoStuff 0 && DoStuff 1 && DoStuff 0
} || {
    echo "An error occured!"
}