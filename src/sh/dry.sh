#!/bin/sh

DoStuff() {
    echo "Doing stuff!"
}

DoStuff

DoSum() {
    echo $(($1 + $2))
}

echo "2 + 1 = $(DoSum 2 1)"