import Text.Printf

main = do
    putStrLn ("Joining " ++ "strings.")
    putStrLn "First line\nSecond line"

    let value = 3
    printf "The value %s is interpolated" (show value)
