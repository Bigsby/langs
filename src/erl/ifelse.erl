-module(ifelse).
-export([start/0]).

getValue() -> 3.

start() -> 
    put(value, true),

    First = get(value),

    if
        First -> io:fwrite("Got true~n");
        true -> io:fwrite("Got else~n")
    end,

    put(value, false),
    Second = get(value),
    if
        Second -> io:fwrite("Got true~n");
        true -> io:fwrite("Got else~n")
    end,

    Result = getValue(),
    if
        Result == 1 -> io:fwrite("Got true");
        Result == 2 -> io:fwrite("Got else");
        true -> io:fwrite("Got if else")
    end,

    erlang:halt().