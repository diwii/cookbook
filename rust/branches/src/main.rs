fn main() {
    // Using if in a let Statement
    // ===========================
    let condition = true;
    let number = if condition { 777 } else { 0 };

    println!("number is: {}", number);

    // The potential result value type must be same
    //                            u32   !=    &str
    // let number = if condition { 5 } else { "six" }; // <-- throws error

    // The default "if", "if else" like in other programming languages
    // ===============================================================
    let number = 3;

    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }

    if number != 0 {
        println!("number was something other than zero");
    }

    let number = 6;

    // Handling Multiple Conditions with else if
    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 { // Note that this will not execute, because 6 is also divisible by 3
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }

    // Note instead of using else if check "match" described in:
    // https://doc.rust-lang.org/book/ch06-00-enums.html
}
