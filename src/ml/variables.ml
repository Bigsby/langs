let sentence  = ref "This is the sentence.";;

Printf.printf "%s\n" !sentence;
Printf.printf "%s\n" !sentence;

sentence := "This is anoter sentence.";;
Printf.printf "%s\n" !sentence;