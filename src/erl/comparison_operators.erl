-module(comparison_operators).
-export([start/0]).

start() -> 
    put(result, 1 == 2),
    io:fwrite("1 equals 2 is ~w~n", [get(result)]),

    put(result, 1 /= 2),
    io:fwrite("1 not equals 2 is ~w~n", [get(result)]),

    put(result, 1 > 2),
    io:fwrite("1 larger than 2 is ~w~n", [get(result)]),

    put(result, 1 >= 2),
    io:fwrite("1 larger than or equals 2 is ~w~n", [get(result)]),

    put(result, 1 < 2),
    io:fwrite("1 less than 2 is ~w~n", [get(result)]),

    put(result, 1 =< 2),
    io:fwrite("1 less than or equeals 2 is ~w", [get(result)]),

    erlang:halt().