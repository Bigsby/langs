def DoStuff(inError)
	if inError
        raise "An error occured!"
    end

    puts "Doing stuff!"
end

begin
    DoStuff(false)
    DoStuff(true)
    DoStuff(false)
rescue Exception => ex
    puts "ERROR: #{ex.message}"
end