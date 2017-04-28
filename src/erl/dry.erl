-module(dry).
-export([start/0]).

doStuf() ->
    io:fwrite("Doing stuff!~n").

doSum(A, B) ->
    A + B.

start() -> 
    doStuf(),

    io:fwrite("2 + 1 = ~w", [doSum(2, 1)]),

    erlang:halt().