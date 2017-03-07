<?php
echo "What say you?\n";
$handle = fopen ("php://stdin","r");
$userInput = trim(fgets($handle));
echo "You said: $userInput";
?>