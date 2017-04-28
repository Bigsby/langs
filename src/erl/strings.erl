-module(strings).
-export([start/0]).

start() -> 
    io:fwrite("Joining " ++ "strings.~n"),

    Value = 3,
    io:fwrite("The value ~w is interpolated", [Value]),

    erlang:halt().