-module(comments).
-export([start/0]).

start() -> 
    io:fwrite("Hello, Comments!"),
    
    % This is a comment

    % Multi line comments
    % are not supported
    erlang:halt().