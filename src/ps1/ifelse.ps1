$value = $true
if ($value) {
    Write-Host "Got true"
}
else {
    Write-Host "Got else"
}

$value = $false
if ($value) {
    Write-Host "Got true"
}
else {
    Write-Host "Got else"
}

$result = 3
if ($result -eq 1) {
    Write-Host "Got true"
}
elseif ($result -eq 2) {
    Write-Host "Got else"
} 
else {
    Write-Host "Got if else"
}