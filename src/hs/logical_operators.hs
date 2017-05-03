import Text.Printf

main = do
    printf "true and false is %s\n" (show (True && False))
    printf "true or false is %s\n" (show (True || False))
    printf "true xor false is %s\n" (show (True /= False))
    printf "not true  is %s" (show (not True))