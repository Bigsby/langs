use Path::Class;

$contentFileStream = file("../files/content.txt");
print $contentFileStream->slurp() . "\n";

$multilineFileStream = file("../files/multipleLines.txt");
$fileHandle = $multilineFileStream->openr();
while($line = $fileHandle->getline()) {
    print "- $line";
}