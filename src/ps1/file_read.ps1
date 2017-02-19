Get-Content "../files/content.txt"

Get-Content "../files/multipleLines.txt" | 
    Foreach-Object { Write-Host "- $_"  }