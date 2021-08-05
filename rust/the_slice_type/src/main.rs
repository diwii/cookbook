fn main() {
    // let s1 = String::from("Čau Rasma");

    // println!("{}", first_word(&s1));

    println!("{:?}", "Čau".as_bytes().iter().enumerate().next());
    // println!("{:#?}", "Čau".as_bytes().iter().next());
}

fn first_word(some_string: &String) -> usize {
    let bytes = some_string.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return i;
        }
    }

    some_string.len()
}
