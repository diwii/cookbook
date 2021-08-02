let isAnimating = false;
let counter = 0;

function playAnimation() {
    isAnimating = true;
    counter++;

    setTimeout(() => {
        isAnimating = false; // Set to false after 1 second
    }, 1000);

    console.log('Playing animation');
}

// Call function every 100ms
const intervalId = setInterval(() => {
    if (isAnimating) {
        console.log('Waiting for animation to finish');
        return;        
    }

    playAnimation();

    if (counter === 2) {
        // Stop calling function
        clearInterval(intervalId);
    }
}, 100);
