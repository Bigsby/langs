<?php
echo "Is '^[0-9]+$' mathed by '123456'?\n";
if (preg_match("/^[0-9]+$/", "123456")){
    echo "yes\n";
}else{
    echo "no\n";
}

echo "Groups of '^([a-z]+)\-(\d+)$' found in 'abcdef-12345'\n";
preg_match("/^([a-z]+)\-(\d+)$/", "abcdef-12345", $matches);
$found = sizeof($matches);
echo "Found $found groups.\n";
for ($groupIndex = 0; $groupIndex < $found; $groupIndex++){
    echo "[$groupIndex] = $matches[$groupIndex]\n";
}
?>