<?php
echo <<<EOT
First line
Second line\n
EOT;

$multilineString = <<<EOD
This is a
multiline string
EOD;

echo $multilineString;
?>