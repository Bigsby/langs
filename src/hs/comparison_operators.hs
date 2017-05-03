import Text.Printf

main = do
    printf "1 equals 2 is %s\n" (show (1 == 2))
    printf "1 not equals 2 is %s\n" (show (1 /= 2))
    printf "1 larger than 2 is %s\n" (show (1 > 2))
    printf "1 larger than or equals 2 is %s\n" (show (1 >= 2))
    printf "1 less than 2 is %s\n" (show (1 < 2))
    printf "1 less than or equals 2 is %s" (show (1 <= 2))