<?php

if ($argc == 1)
    echo "No parameters";
elseif ($argc == 2)
    echo "Parameter is " . $argv[1];
else
    echo "Too many parameters";
?>