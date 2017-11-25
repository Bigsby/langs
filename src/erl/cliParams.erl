-module(ifelse).
-export([start/0]).

getValue() -> 3.

start() -> 
    Args = init:get_plain_arguments(),
    if
        length(Args) == 0 -> io:fwrite("No parameters");
        length(Args) == 1 -> io:fwrite("Parameter is " ++ lists:nth(1, Args));
        true -> io:fwrite("Too many parameters")
    end,

    erlang:halt().