-module(loop).
-export([start/0]).

while(Current, Compare, Action) ->
    New = Action(Current),
    State = Compare(New),
    if
        State -> while(New, Compare, Action);
        true -> ok
    end.

start() -> 
    while(1, 
        fun(X) -> X < 10 end, 
        fun(X) -> 
            io:fwrite("~w~n",[X]), 
            X + 1 
        end),

    erlang:halt().