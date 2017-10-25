<?php
$folderPath = __DIR__ . "/../files/";

$folders = array();
$files = array();

foreach(scandir($folderPath) as $childItem)
{
    if ($childItem == "." || $childItem == "..")
        continue;

    if (is_dir($folderPath . $childItem))
        array_push($folders, $childItem);
    if (is_file($folderPath . $childItem))
        array_push($files, $childItem);
}

foreach($folders as $folder){
    echo "/$folder\n";
}

foreach($files as $file){
    $fileSize = filesize($folderPath . $file);
    echo "$file,$fileSize". "B\n";
}
?>