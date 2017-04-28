-module(iterate).
-export([start/0]).

start() -> 
    SetOfItems = [1, 2, 3],
    lists:foreach(fun (Item) -> io:fwrite("~w~n", [Item]) end, SetOfItems),

    erlang:halt().