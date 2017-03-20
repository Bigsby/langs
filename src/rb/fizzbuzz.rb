1.upto(100) do |i|
    if i % 3 == 0 && i % 5 == 0
        print "FizzBuzz"
    elsif i % 3 == 0
        print "Fizz"
    elsif i % 5 == 0
        print "Buzz"
    else
        print i
    end

    if i % 10 == 0
        puts
    else
        print ","
    end
end