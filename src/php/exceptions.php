<?php
function DoStuff($inError) {
    if ($inError){
        throw new Exception("An error occurred!");
    }

	echo "Doing stuff!\n";
}

try{
    DoStuff(false);
    DoStuff(true);
    DoStuff(false);
} catch (Exception $ex){
    echo "ERROR: " . $ex->getMessage();
}
?>