-module(modularity).
-export([start/0]).
-include("anotherModule.erl").

start() -> 
    doOtherStuff(),
    
    erlang:halt().