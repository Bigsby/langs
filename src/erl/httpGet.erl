-module(httpGet).
-export([start/0]).

start() ->
    application:start(inets),

    {ok, {_, _, Body}} = httpc:request("http://langs.bigsbyspot.org/files/webcall.txt"),
    io:fwrite("~s", [Body]),

    erlang:halt().