#load "str.cma";;

print_endline "Is '^[0-9]+$' matched by '123456'?";;
try
  ignore(Str.search_forward (Str.regexp "^[0-9]+$") "123456" 0);
  print_endline "yes";
with
  Not_found -> print_endline "no";;

print_endline "Grups of '^([a-z]+=\\-([0-9]+)$'";;
let codeRegexp = Str.regexp "^([a-z]+=\\-([0-9]+)$"

