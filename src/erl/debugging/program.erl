-module(program).
-export([start/0]).

start() -> 
    io:fwrite("here"),
    erlang:halt().