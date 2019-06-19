fn do_stuff() {
    println!("Doing stuff!");
}

fn do_sum(a :i32, b :i32) -> i32 {
    a + b
}

fn main() {
    do_stuff();
    println!("2 + 1 = {}", do_sum(2, 1));
}
