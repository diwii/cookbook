# Rules of references
* At any given time, you can have either one mutable reference or any number of immutable references.
* References must always be valid. (no dangling references)

# What is a data race?
A data race is similar to a race condition and happens when these three behaviors occur:

* Two or more pointers access the same data at the same time.
* At least one of the pointers is being used to write to the data.
* There’s no mechanism being used to synchronize access to the data.

## We also cannot have a mutable reference while we have an immutable one.
```rust
let mut s = String::from("hello");

let r1 = &s; // no problem
let r2 = &s; // no problem
let r3 = &mut s; // BIG PROBLEM

println!("{}, {}, and {}", r1, r2, r3);
```
## Reference scope
Note that a reference’s scope starts from where it is introduced and continues through the last time that reference is used.

```rust
let r1 = &s; // no problem
let r2 = &s; // no problem
println!("{} and {}", r1, r2);
// r1 and r2 are no longer used after this point

let r3 = &mut s; // no problem
println!("{}", r3);
```
# Dangle (Dangling Reference)
A pointer that references a location in memory that may have been given to someone else, by freeing some memory while preserving a pointer to that memory.

```rust
fn dangle() -> &String { // dangle returns a reference to a String

    let s = String::from("hello"); // s is a new String

    &s // we return a reference to the String, s
} // Here, s goes out of scope, and is dropped. Its memory goes away.
  // Danger!
```

Because s is created inside dangle, when the code of dangle is finished, s will be deallocated. But we tried to return a reference to it. That means this reference would be pointing to an invalid String.
