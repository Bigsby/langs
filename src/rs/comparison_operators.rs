fn main() {
    let mut result = 1 == 2;
    println!("1 equals 2 is {}", result);

    result = 1 != 2;
    println!("1 not equals 2 is {}", result);

    result = 1 > 2;
    println!("1 larger than 2 is {}", result);

    result = 1 >= 2;
    println!("1 larger than or equals 2 is {}", result);

    result = 1 < 2;
    println!("1 less than 2 is {}", result);

    result = 1 <= 2;
    println!("1 less than or equals 2 is {}", result);
}
