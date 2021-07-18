fn main() {
    // Repetition with Loops
    // =====================

    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2; // Return value
        }
    };

    println!("The result is {}", result);

    // Conditional Loops with while
    // ============================

    let mut number = 3;

    while number != 0 {
        println!("{}!", number);

        number -= 1;
    }

    println!("LIFTOFF!!!");

    // Looping Through a Collection with for
    // =====================================

    let a = [10, 20, 30, 40, 50];

    for element in a.iter() {
        println!("the value is: {}", element);
    }

    // Similar to while loop
    for number in (1..4).rev() {
        println!("{}!", number);
    }
    println!("LIFTOFF!!!");

    // Fibonacci loop
    // ==============

    let n = 75; // 75th number of fibonacci sequence
    let mut preceeding: [usize; 2] = [0, 1]; // Start of sequence

    for _index in 0..n-2 { // n-2 exclude first 2 numbers which are 0 and 1
        let f = preceeding[0] + preceeding[1];
        println!("{}", f);

        preceeding[0] = preceeding[1];
        preceeding[1] = f;
    }
}
