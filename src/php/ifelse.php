<?php
$value = true;
if ($value) {
    echo "Got true\n";
} else {
    echo "Got else\n";
}

$value = false;
if ($value)
    echo "Got true\n";
else
    echo "Got else\n";

$result = 3;
if ($result == 1)
    echo "Got true";
elseif ($result == 2)
    echo "Got else";
else
    echo "Got if else";
?>