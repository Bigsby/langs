-module(fizzbuzz).
-export([start/0]).

start() ->
    lists:foreach(
        fun (I) -> 
            if
                I rem 15 == 0 -> io:fwrite("FizzBuzz");
                I rem 3 == 0 -> io:fwrite("Fizz");
                I rem 5 == 0 -> io:fwrite("Buzz");
                true -> io:fwrite("~w", [I])
            end,

            if
                I rem 10 == 0 -> io:fwrite("~n");
                true -> io:fwrite(",")
            end
        end, 
        lists:seq(1, 100)),

    erlang:halt().