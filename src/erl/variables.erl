-module(variables).
-export([start/0]).

start() -> 
    Local = #{sentence => "This is the sentence.~n"},

    io:fwrite(maps:get(sentence, Local)),
    io:fwrite(maps:get(sentence, Local)),
    
    maps:update(sentence, "This is another sentence.", Local),
    io:fwrite(maps:get(sentence, Local)),

    erlang:halt().