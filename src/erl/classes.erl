-module(classes).
-export([start/0]).

-record(montyPython, {firstName, lastName}).

fullName(MontyPython) ->
    MontyPython#montyPython.firstName ++ " " ++ MontyPython#montyPython.lastName.

start() ->
    put(montyPython, #montyPython{firstName="John", lastName="Cleese"}),
    io:fwrite("Monty Python is ~s.~n", [fullName(get(montyPython))]),

    MontyPython = get(montyPython),
    put(montyPython, MontyPython#montyPython{firstName="Eric", lastName="Idle"}),
    io:fwrite("Now, Monty Python is ~s.~n", [fullName(get(montyPython))]),
    
    erlang:halt().