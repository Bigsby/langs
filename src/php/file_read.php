<?php
echo file_get_contents("../files/content.txt") . "\n";

$multiLineFile = fopen("../files/multipleLines.txt", "r");
while (!feof($multiLineFile)) {
    echo "- " . fgets($multiLineFile);
}
fclose($multiLineFile);
?>