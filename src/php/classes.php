<?php
class MontyPython{
    public $FirstName;
    public $LastName;

    function __construct($firstName, $lastName){
        $this->FirstName = $firstName;
        $this->LastName = $lastName;
    }

    function FullName(){
        return $this->FirstName . " " . $this->LastName;
    }
}

$montyPython = new MontyPython("John", "Cleese");
echo "Monty Python is " . $montyPython->FullName() . ".\n";

$montyPython->FirstName = "Eric";
$montyPython->LastName = "Idle";
echo "Now, Monty Python is " . $montyPython->FullName() . ".";
?>