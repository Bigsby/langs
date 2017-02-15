function DoStuff {
    Write-Host "Doing stuff!"
}
DoStuff

function DoSum {
    param( [int]$a, [int]$b )
    return $a + $b
}

Write-Host ("2 + 1 = " + (DoSum -a 2 -b 1))