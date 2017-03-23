function GetAgeInYears{
    param([System.DateTime] $birthday)
    $today = [System.DateTime]::Today
    $age = $today.Year - $birthday.Year
    $today.Da
    return $age - (0, 1)[$today.DayOfYear -lt $birthday.DayOfYear]
}

$birthday = Get-Date -Year 1939 -Month 10 -Day 27
$age = GetAgeInYears($birthday)
Write-Host "John Cleese was born in $($birthday.ToString("yyyy-MM-dd")) and is$age."

$parsedDate = Get-Date "1975-11-10T01:25:00"
Write-Host "Parsed date is $($parsedDate.ToString("s"))"