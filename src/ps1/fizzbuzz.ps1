foreach ($i in 1..100) {
    if ($i % 3 -eq 0 -and $i % 5 -eq 0){
        Write-Host -NoNewline "FizzBuzz"
    }
    elseif ($i % 3 -eq 0){
        Write-Host -NoNewline "Fizz"
    }
    elseif ($i % 5 -eq 0){
        Write-Host -NoNewline "Buzz"
    }
    else{
        Write-Host -NoNewline $i
    }

    if ($i % 10 -eq 0){
        Write-Host
    }else{
        Write-Host -NoNewline ","
    }
}