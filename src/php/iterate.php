<?php
$setOfItems = array(1, 2, 3);

foreach($setOfItems as &$item) {
    echo "$item\n"; 
}
?>