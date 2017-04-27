-module(exit).
-export([start/0]).

start() -> 
    io:fwrite("Existing..."),
    erlang:halt(),
    io:fwrite("This will not show!").