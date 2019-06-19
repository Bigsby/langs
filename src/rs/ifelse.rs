fn main() {
    let mut value = true;

    if value {
        println!("Got true");
    } else {
        println!("Got else");
    }

    value = false;

    if value {
        println!("Got true");
    } else {
        println!("Got else");
    }

    let result = 3;
    if result == 1 {
        println!("Got true");
    } else if result == 2 {
        println!("Got else");
    } else {
        println!("Got if else");
    }
}
