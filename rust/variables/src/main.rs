fn main() {
    const MAX_POINTS: u32 = 100_000; // When declaring const its type must be annotated -> : u32
    println!("The value of MAX_POINTS is: {}", MAX_POINTS);

    let x = 5;
    println!("The value of x is: {}", x);
    // x = 6; // <-- Cannot assign twice to immutable variable

    // Mutable variable type cannot change
    let mut y = 1; // Variable is mutable
    println!("The value of y is: {}", y);
    y = 3; // And can be assigned
    println!("The value of y is: {}", y);

    // The first variable is shadowed by second
    // Shadowing alows for type change

    let z = "99"; // String slice
    println!("The value of z is: {:?}", z);
    let z = z.parse::<u32>(); // Must be unwraped else returns enum Result variants
    println!("The value of z is: {:?}", z);
    let z = "89"; // String slice
    println!("The value of z is: {:?}", z);
    let z: u32 = z.parse().unwrap(); // Parse to int (u32)
    println!("The value of z is: {:?}", z);
}
