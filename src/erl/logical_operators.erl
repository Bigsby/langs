-module(logical_operators).
-export([start/0]).

start() -> 

    io:fwrite("true and false is ~w~n", [true and false]),
    io:fwrite("true or false is ~w~n", [true or false]),
    io:fwrite("true xor false is ~w~n", [true xor false]),
    io:fwrite("not true is ~w~n", [not true]),

    erlang:halt().