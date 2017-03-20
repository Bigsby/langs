class MontyPython{
    [String]$FirstName
    [String]$LastName

    MontyPython([String]$firstName, [String]$lastName){
        $this.FirstName = $firstName
        $this.LastName = $lastName
    }

    [String] FullName(){
        return $this.FirstName + " " + $this.LastName
    }
}

$montyPython = [MontyPython]::new("John", "Cleese")
Write-Host ("Monty Python is " + $montyPython.FullName() + ".")

$montyPython.FirstName = "Eric"
$montyPython.LastName = "Idle"
Write-Host ("Now, Monty Python is " + $montyPython.FullName() + ".")