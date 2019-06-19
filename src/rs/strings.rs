fn main() {
    let mut joined_string_start = "Joining ".to_owned();
    let joined_string_end = "strings.";
    joined_string_start.push_str(joined_string_end);

    println!("{}", joined_string_start);

    let value = 3;
    println!("The value {} is interpolated", value);
}
