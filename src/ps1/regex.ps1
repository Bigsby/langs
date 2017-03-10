Write-Host "Is '^[0-9]+$' mathed by '123456'?"
if (([regex] "^[0-9]+$").IsMatch("123456")) {
    Write-Host "yes"
} else {
    Write-Host "no"
}

Write-Host "Groups of '^([a-z]+)\-(\d+)$' found in 'abcdef-12345'"
$codeRegex = [regex] "^([a-z]+)\-(\d+)$"
$matches = $codeRegex.Match("abcdef-12345")
Write-Host "Found $($matches.Groups.Count) groups."

for ($groupIndex = 0; $groupIndex -lt $matches.Groups.Count; $groupIndex++){
    Write-Host "[$groupIndex] = $($matches.Groups[$groupIndex].Value)"
}