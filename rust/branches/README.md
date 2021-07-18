# Using `if` in a `let` statement

The number variable will be bound to a value based on the outcome of the if expression.

```rust
fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {}", number);
}
```
