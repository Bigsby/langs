function DoStuff {
    param([bool] $inError)
    
    if ($inError){
        throw [System.Exception] "An error occured!"
    }

    Write-Host "Doing stuff!"
}

try {
    DoStuff($false)
    DoStuff($true)
    DoStuff($false)
}
catch {
    Write-Host "ERROR: $($_.Exception.Message)"
}