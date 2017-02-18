<?php
function DoStuff() {
	echo "Doing stuff!\n";
}

DoStuff();

function DoSum($a, $b){
    return $a + $b;
}

echo "2 + 1 = " . DoSum(2, 1);
?>