let doStuff = 
  print_string "Doing Stuff!\n";;

let doSum a b = 
  a + b;;

doStuff;;

let value = doSum 2 1;;
Printf.printf "2 + 1 = %d\n" (doSum 2 1);;