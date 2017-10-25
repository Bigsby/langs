-module(file_system).
-export([start/0]).

start() ->
    {ok, CurrentDirectory} = file:get_cwd(),
    FolderPath = CurrentDirectory ++ "/../files/",

    {ok, ChildItems} = file:list_dir(FolderPath),

    Folders = lists:filter(fun(ChildItem) -> filelib:is_dir(FolderPath ++ ChildItem) end, ChildItems),
    
    Files = lists:filter(fun(ChildItem) -> 
        filelib:is_file(FolderPath ++ ChildItem) and (not filelib:is_dir(FolderPath ++ ChildItem)) 
    end, ChildItems),

    lists:foreach(fun(Folder) -> io:format("/~s~n", [Folder]) end, Folders),
    lists:foreach(fun(File) -> io:format("~s,~wB~n", [File, filelib:file_size(FolderPath ++ File)]) end, Files),

    erlang:halt().
