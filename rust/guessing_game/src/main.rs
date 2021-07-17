use rand::Rng; // The Rng trait defines methods that random number generators implement,
// and this trait must be in scope for us to use those methods.
use std::cmp::Ordering;
use std::io; // input/output library

fn main() {
    println!("Guess the number!"); // print string to the screen macro
    // println! <-- the "!" means calling macro instead of normal function

    // Get a random number
    let secret_number = rand::thread_rng().gen_range(1..=100); // <-- .gen_range(1..101) is equal

    println!("The secret number is: {}", secret_number);

    loop {
        println!("Please input your guess.");

        let mut guess = String::new();

        // Call stdin function from io module,
        // returns instance Stdin which is a type that represents handle to the standard input for your terminal
        io::stdin()
            // call read_line method of the Stdin handle, APPENDS user input to string
            .read_line(&mut guess)
            // read_line returns Result instance which has .expect method on it
            // if Ok => returns bytes of user input
            // if Err => returns error message and panic
            .expect("Failed to read line");

        // To satisfy read_line() user need to press Enter and so the new line ('\n') character is added to the string
        // how string looks before .trim() => "5\n"
        // We need to eliminate any white space or new line ('\n') character by using .trim() before passing string to .parse()
        let guess: u32 = match guess.trim().parse() {
            Ok(number) => number, // If ok return number
            Err(_) => { // The underscore, _, is a catchall value
                println!("Not a number");
                continue // If Error restart loop with continue (go to next iteration of the loop)
            }
        };
        
        println!("You guessed: {}", guess);

        // Compare guess to secret_number, returns enum: Ordering which has variants:
        // Less, Greater, Equal
        // By using match we select which arm to use based on returned value from .cmp()
        match guess.cmp(&secret_number) {
            // A match expression is made up of arms, an arm consists of:
            // PATERN and  =>   CODE that should be run if the pattern matches
            Ordering::Less => println!("Too small!"), // 
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break; // Break loop!
            }
        }
    }
}
