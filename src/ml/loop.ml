let value = ref 1;;

while !value < 10 do
  print_int !value;
  print_newline();
  incr value
done