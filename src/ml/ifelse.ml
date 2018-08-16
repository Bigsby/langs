let value = ref true;;

if !value
then print_string "Got true\n"
else print_string "Got else\n";;

value := false;;
if !value
then print_string "Got true\n"
else print_string "Got else\n";;

let result = 3;;

if result = 1
then print_string "Got true\n"
else if result = 2
then print_string "Got else\n"
else print_string "Got if else\n";;