import Text.Printf

doStuff = 
    putStrLn "Doing stuff!"

doSum a b =
    a + b

main = do
    doStuff
    printf "2 + 1 = %s" (show (doSum 2 1))