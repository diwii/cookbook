# Rust lang
* https://doc.rust-lang.org/book/
* https://www.rust-lang.org/learn
* [Appendix B - List of operators](https://doc.rust-lang.org/book/appendix-02-operators.html)

# Installation

`curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh`

The Cargo home directory located at:

`/home/[user_name]/.cargo`

Rustup metadata and toolchains in the Rustup home directory, located at:

`/home/[user_name]/.rustup`

**rustup commands**

`rustup update`

`rustup self uninstall`

Local documentation:

`rustup doc`

**rustc** Rust compiler

`rustc --version`

`rustc [hello_world.rs]`

# Cargo
## Creating a Project with Cargo

`cargo --version`

`cargo new [project_name]`

Build without runing:

`cargo build`

`cargo build --release` *use for release*

Compile and Run:

`cargo run`

Check if code compiles without runing:

`cargo check`

Build result is stored in target/debug directory

**Working on any existing project**

```
git clone example.org/someproject
cd someproject
cargo build
```

## cargo doc --open
Build documentation provided by all of your dependencies locally and open it in your browser

# What is what, what?

**Variables and References(&) are immutable by default.**

`let variable_name = ...`

`let mut variable_name = ...` *Sets mutable variable*

```rust
.read_line(&mut guess)
```
The `&` indicates that this argument is a reference, which gives you a way to let multiple parts of your code access one piece of data without needing to copy that data into memory multiple times.