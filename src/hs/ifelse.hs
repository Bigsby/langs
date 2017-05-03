main = do
    let value = True
    if value
        then putStrLn "Got true"
        else putStrLn "Got else"
    
    let value = False
    if value
        then putStrLn "Got true"
        else putStrLn "Got else"

    let result = 3
    if result == 1
        then putStrLn "Got true"
        else if result == 2
            then putStrLn "Got else"
            else putStrLn "Got if else"