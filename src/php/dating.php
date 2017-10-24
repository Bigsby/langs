<?php
date_default_timezone_set('UTC');

function GetAgeInYears($birthday){
    $today = new DateTime();
    return $birthday->diff($today)->y;
}

$birthday = new DateTime("1939-10-27");
$age = GetAgeInYears($birthday);
echo "John Cleese was born in " . $birthday->format("Y-m-d") . " and is $age years old.\n";

$parsedDate = new DateTime("1975-11-10T01:25:00");
echo "Parsed date is " . $parsedDate->format("Y-m-d\TH:i:s");
?>