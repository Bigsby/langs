-module(file_read).
-export([start/0]).

readAllLines(Device) ->
    case io:get_line(Device, "") of
        eof -> [];
        Line -> [Line] ++ readAllLines(Device)
    end.

start() -> 
    {ok, Data} = file:read_file("./../files/content.txt"),
    io:fwrite(Data),

    io:fwrite("~n"),

    {ok, Device} = file:open("./../files/multipleLines.txt", [read]),
    Lines = readAllLines(Device),
    lists:foreach(
            fun (Line) -> io:fwrite("- ~s", [Line]) end, 
            Lines),
    file:close(Device),

    erlang:halt().