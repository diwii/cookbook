# Rust lang
* https://doc.rust-lang.org/book/
* https://www.rust-lang.org/learn

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

# Creating a Project with Cargo

`cargo --version`

`cargo new [project_name]`

Build without runing:

`cargo build`

`cargo build --release` *use for release*

Compile and Run:

`cargo run`

Check if code compiles without runing:

`cargo check`

Result is stored in target/debug directory

**Working on any existing project**

```
git clone example.org/someproject
cd someproject
cargo build
```