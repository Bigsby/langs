$folderPath = Join-Path -Path Get-Location -ChildPath "..\..\files"

Get-ChildItem $folderPath -Directory |
    ForEach-Object {
    Write-Host "/$_"
}

Get-ChildItem $folderPath -File |
    ForEach-Object {
    Write-Host "$_,$($_.Length)B"
}
