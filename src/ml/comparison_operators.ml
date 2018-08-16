let result = ref (1 = 2);;
Printf.printf "1 equals to 2 is %s\n" (if !result then "True" else "False");;

result := (1 <> 2);;
Printf.printf "1 not equals to 2 is %s\n" (if !result then "True" else "False");;

result := (1 > 2);;
Printf.printf "1 larger than 2 is %s\n" (if !result then "True" else "False");;

result := (1 >= 2);;
Printf.printf "1 larger than or equals 2 is %s\n" (if !result then "True" else "False");;

result := (1 < 2);;
Printf.printf "1 less than 2 is %s\n" (if !result then "True" else "False");;

result := (1 <= 2);;
Printf.printf "1 less than or equals 2 is %s\n" (if !result then "True" else "False");;