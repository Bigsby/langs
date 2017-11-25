if ($args.Length -eq 0) {
    Write-Host "No parameters"
}
elseif ($args.Length -eq 1) {
    Write-Host "Parameters is " + $args[0]
} 
else {
    Write-Host "Too many parameters"
}