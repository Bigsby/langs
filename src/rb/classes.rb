class MontyPython
    def initialize(firstName, lastName)
        @firstName = firstName
        @lastName = lastName
    end

    def FirstName=firstName
        @firstName = firstName
    end

    def LastName=lastName
        @lastName = lastName
    end

    def FullName
        return @firstName + " " + @lastName
    end
end

montyPython = MontyPython.new("John", "Cleese")
puts "Monty Python is #{montyPython.FullName}."

montyPython.FirstName = "Eric"
montyPython.LastName = "Idle"
puts "Now, Monty Python is #{montyPython.FullName}."