fn main() {
    let guess: u32 = "42".parse().unwrap();

    // Scalar type represents a single value
    // integer, floating-point number, boolean, character

    // Integer type (is a number without fraction component)
    // =====================================================
    let small_num_8_bit: i8 = -128; // Signed (minus), i8 max: is 127, min: -128
    println!("small_num_8_bit: {}", small_num_8_bit);
    
    let medium_num_16_bit: u16 = 65535; // Unsigned (only positive)
    println!("medium_num_16_bit: {}", medium_num_16_bit);

    // Number literals
    let decimal = 98_222; // Default is u32
    println!("decimal: {}", decimal);
    
    let hex = 0xff;
    println!("hex: {}", hex);
    
    let octal = 0o77;
    println!("octal: {}", octal);
    
    let binary = 0b1111_1111;
    println!("binary: {}", binary);
    
    let byte = b'A'; // u8 only this is single byte
    println!("byte: {}", byte);

    // usize/isize depend on the kind of computer your program is running 64 or 32 bit
    let largest_based_on_system: usize = 18_446_744_073_709_551_615; // if 64 bit system | usize / isize
    println!("largest_based_on_system: {}", largest_based_on_system);

    // Float Type
    // ==========
    let default_float_type = 9.0; // float defaults to f64 type
    println!("default_float_type {}", default_float_type);

    const PI: f32 = 3.141592654;
    // Circle Circumference(latviski: Riņķa līnija)
    let circumference: f64 = (5.0 * 2.0 * PI).into(); // convert f32 to f64 with .into()
    println!("circumference: {}", circumference);

    // Character Type (most primitive alphabetic type) size: 4 bytes
    // =============================================================

    // let c = 'z';
    // let z = 'ℤ';
    let heart_eyed_cat = '😻';
    let nerd_face = '\u{1F913}'; // 4 bytes and represents Unicode Scalar Value
    println!("{}", nerd_face);

    // Compound Types
    // Can group multiple values into one type.
    // Rust has two primitive compound types: tuples and arrays.
    // =========================================================

    // The Tuple Type
    // Groups together number of values with variety of types.
    // Fixed length: once declared, they cannot grow or shrink in size.

    let tup: (i32, f64, char, &str) = (99, 0.9, heart_eyed_cat, "string of text");
    println!("Tuple: {:?}", tup);

    let x = tup.0; // Accessing by index
    let y = tup.1;
    println!("Tuple index: {}, {}", x, y);

    // Destructuring tuple
    let (_, _, emoji, text) = tup;
    println!("Destructuring tuple: {}, {}", emoji, text);

    // The Array Type
    // Every element must be same type

    let arr = [1, 2, 3, 4, 5];
    println!("Array {:?}", arr);

    // Annotate array type and number of elements
    let months: [&str; 12] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    println!("Array of months {:?}", months);
    // Access array element by index
    println!("Last month is: {}", months[11]);

    let arr = ["Hello"; 5]; // Repeats value
    println!("Array {:?}", arr);
}
