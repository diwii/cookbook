fn main() {
    println!("Five is: {}", five());

    // let x = (let y = 6); // <-- Not possible as let y = 6 is statement,
                            // and statements don't return value, so there isn’t anything for x to bind to.
                            // This is different from other languages where assignments return the value of assignment.println!

    // Expression that returns value which can be bound to by "y"
    let y = {
        let x = 5;
        x + 1   // Expressions do not include ending semicolons.
                // If you add a semicolon to the end of an expression, you turn it into a statement, which will then not return a value
    };
    println!("y is: {}", y);

    println!("5 + 1 is: {}", plus_one(5));

    println!("Fahrenheit: {}", celsius_to_fahrenheit(10.0));
}

fn five() -> u32 { // <-- return type
    5   // <-- no semicolon means, this will be returned
}

fn plus_one(x: u32) -> u32 {
    x + 1   // <-- no semicolon
}

fn celsius_to_fahrenheit(c: f64) -> f64 {
    (9.0 / 5.0 * c) + 32.0
}
