class MontyPython:
    def __init__(self, firstName, lastName):
        self.FirstName = firstName
        self.LastName = lastName
    
    def FullName(self):
        return self.FirstName + " " + self.LastName

montyPython = MontyPython("John", "Cleese")
print("Monty Python is", montyPython.FullName(), ".")

montyPython.FirstName = "Eric"
montyPython.LastName = "Idle"
print("Now, Monty Python is", montyPython.FullName(), ".")