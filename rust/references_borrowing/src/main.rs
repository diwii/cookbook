fn main() {
    let s1 = String::from("hello");
    let mut s2 = String::from("Hello");
    // s1 gets borrowed
    let len = calculate_length(&s1); // <-- The &s1 syntax creates a reference that refers to s1 but does not own it
    println!("The length of '{}' is {}.", s1, len);

    change(&mut s2); // s2 gets borrowed with ability to mutate
    println!("The changed string is: '{}'", s2);

    // Mutable references have one big restriction: you can have only one mutable reference
    // to a particular piece of data in a particular scope.
    // Following code fails:
    // let reference1 = &mut s2;
    // let reference2 = &mut s2; // Cannot borrow as mutable more than once at a time
    // println!("{}, {}", reference1, reference2);

    // As always, we can use curly brackets to create a new scope,
    // allowing for multiple mutable references, just not simultaneous ones:
    {
        let reference1 = &mut s2;
    } // reference1 goes out of scope here, so we can make a new reference with no problems.

    let reference2 = &mut s2;
    // let reference1 = &s2; // <- Canno't borrow as immutable because it is borrowed as mutable
    // println!("{}, {}", reference1, reference2);

} // <-- s1, s2, len, reference2 goes out of scope here and gets droped

fn calculate_length(some_string: &String) -> usize {
    some_string.len()
}   // Here, some_string goes out of scope. But because it does not have ownership of what
    // it refers to, nothing happens(value doesnt get dropped)

fn change(some_string: &mut String) -> () {
    some_string.push_str(", world");
}   // Here, some_string goes out of scope. But because it does not have ownership of what
    // it refers to, nothing happens(value doesnt get dropped)
