let doStuff inError =
    if inError
    then raise (Failure "An error occured!")
    else print_string "Doing stuff!\n";;

try
    doStuff false;
    doStuff true;
    doStuff false;
with
    Failure message -> Printf.printf "ERROR: %s\n" message;;
    