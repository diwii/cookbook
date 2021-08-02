[The async/await video](https://www.youtube.com/watch?v=vn3tm0quoqE&ab_channel=Fireship)

# Execution sequence
```javascript
console.log('Synchronous 1 <- executes 1st');

// Time out with time delay 0ms
setTimeout(_ => console.log('Timeout 2 <- executes last'), 0); // This is macro task, what is macro task??

// Promise that resolves right away
Promise.resolve().then(_ => console.log('Promise 3 <- executes 3rd')); // Micro task, what is micro task??

console.log('Sunchronous 4 <- executes 2nd');
```
