-module(exceptions).
-export([start/0]).

doStuff(InError) ->
    if
        not InError -> io:fwrite("Doing stuff!~n");
        true -> throw("An error occured!")
    end.

start() -> 
    try
        doStuff(false),
        doStuff(true),
        doStuff(false) % not reached
    catch
        throw:Message -> io:fwrite("ERROR: " ++ Message)
    end,

    erlang:halt().