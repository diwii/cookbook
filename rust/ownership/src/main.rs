fn main() {
    let mut s = String::from("Hello"); // String data is stored on the heap
    s.push_str(", world!"); // push_str() appends string literal to a String
    println!("{}", s);

    println!("{}", get_string());

    // Stack-Only Data: Copy
    // ===============================================================
    // Copy possible, because integers are simple values with a known,
    // fixed size, and these two 5 values are pushed onto the stack.
    let x = 5;
    let y = x; // y is copy of x
    println!("y is copy of x: {}", y);

    // Variables and Data interact: Move
    // =================================
    let s1 = String::from("hello");
    // s2 is not a copy of s1 -> s1 is moved to s2
    let s2 = s1; // s1 is no longer valid, this will not work -> println!("{}", s1); 
    println!("s1 is moved into -> s2: {}", s2);

    // Variables and Data interact: Clone
    // =================================
    let s1 = String::from("hello");
    let s2 = s1.clone();
    println!("Cloned: s1 = {}, s2 = {}", s1, s2);

    // Ownership and Functions
    // =======================
    let s = String::from("gets owned by function"); // s is stored on the heap
    takes_ownership(s);
    // println!("{}", s); <-- is not possible because s is moved into takes_ownership function

    let x = 5; // x is stored on the stack
    makes_copy(x); // <-- passing x into function copies value instead of moving it
    // If a type implements the Copy trait, an older variable is still usable after assignment.
    println!("original?: {}", x); // <-- this is usable, because x is i32 type which implements Copy trait
}

fn get_string() -> String {
    String::from("String returned from function") // <- no semicolon (;)
}

fn takes_ownership(some_string: String) {
    println!("{}", some_string);
}

fn makes_copy(some_integer: i32) {
    println!("copied: {}", some_integer);
}
