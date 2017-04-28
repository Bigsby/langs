-module(consoleInput).
-export([start/0]).

start() -> 
    UserInput = io:get_line("What do say you?\n"),
    io:fwrite("You said: ~s", [UserInput]),

    erlang:halt().