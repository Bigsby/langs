-module(regex).
-export([start/0]).

start() -> 
    io:fwrite("Is '^[0-9]+$' mathed by '123456'?~n"),
    case re:run("123456", "^[0-9]+$") of
        {match, _} -> io:fwrite("yes~n");
        nomatch -> io:fwrite("no~n")
    end,

    String = "abcdef-12345",
    io:fwrite("Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'~n"),

    {match, Captured} = re:run(String, "^([a-z]+)\\-(\\d+)$"),
    io:fwrite("Found ~w groups.~n", [length(Captured)]),
    lists:foldl(fun ({Start, Stop}, Index) ->
            io:fwrite("[~w] = ~s~n", [Index, string:sub_string(String, Start + 1, Stop + Start)]),
            Index + 1
        end,
        0,
        Captured),

    erlang:halt().