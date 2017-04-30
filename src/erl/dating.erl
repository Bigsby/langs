-module(dating).
-export([start/0]).

calculateAge(Birthday) ->
    {BirthdayYear, BirthdayMonth, BirthdayDay} = Birthday,
    {{NowYear, NowMonth, NowDay}, _} = calendar:local_time(),
    Age = NowYear - BirthdayYear,
    if 
        NowMonth > BirthdayMonth -> Age;
        NowMonth < BirthdayMonth -> Age -1;
        true -> if
                NowDay >= BirthdayDay -> Age;
                true -> Age + 1 
            end
    end.

parseDate(String) ->
    [Year, Month, Day] = string:tokens(String, "-"),
    {list_to_integer(Year), list_to_integer(Month), list_to_integer(Day)}.

parseTime(String) ->
     [Hours, Minutes, Seconds] = string:tokens(String, ":"),
     {list_to_integer(Hours), list_to_integer(Minutes), list_to_integer(Seconds)}.

parseDateTime(String) ->
    [Date, Time] = string:tokens(String, "T"),
    {parseDate(Date), parseTime(Time)}.

start() -> 
    Birthday = {1939, 10, 27},
    {BirthdayYear, BirthdayMonth, BirthdayDay} = Birthday,
    io:fwrite("John Cleese was born in ~w-~2..0w-~2..0w and is ~w years old.~n", [BirthdayYear, BirthdayMonth, BirthdayDay, calculateAge(Birthday)]),

    {{Year, Month, Day}, { Hours, Minutes, Seconds}} = parseDateTime("1975-11-10T01:25:00"),
    io:fwrite("Parsed date is ~w-~2..0w-~2..0wT~2..0w:~2..0w:~2..0w", [Year, Month, Day, Hours, Minutes, Seconds]),

    erlang:halt().