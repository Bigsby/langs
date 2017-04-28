-module(variables).
-export([start/0]).

start() -> 
    put(sentence, "This is the sentence.~n"),

    io:fwrite(get(sentence)),
    io:fwrite(get(sentence)),
    
    put(sentence, "This another sentence."),
    
    io:fwrite(get(sentence)),

    erlang:halt().