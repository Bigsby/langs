foreach $i (1..100){
    print $i % 3 == 0 && $i % 5 == 0 ? "FizzBuzz"
        : $i % 3 == 0 ? "Fizz"
        : $i % 5 == 0 ? "Buzz"
        : $i;
    
    if ($i % 10 == 0){
        print "\n"
    }else{
        print ",";
    }
}