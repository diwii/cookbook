let isAnimating = false;

function playAnimation() {
    return new Promise((resolve, reject) => {
        let isAnimating = true;

        setTimeout(() => {
            isAnimating = false; // Change to false after 1 second
        }, 1000);

        // Call function every 100ms
        const intervalId = setInterval(() => {
            if (isAnimating) {
                console.log('Waiting for animation to finish');
                return;        
            }

            clearInterval(intervalId); // Stop calling function

            // If we want to return error
            let error = false;
            if (error) {
                reject('Error message here');
            }
    
            // Else return result and complete promise
            resolve('Animation finished!');
        }, 100);
    });
}

console.log('Play the animation');

playAnimation()
    .then((result) => { // Function when promise is resolved
        console.log(result);
    })
    .catch((error) => { // Catch error
        console.warn(error);
    });


// Creates a Promise that is resolved with an array of results
// when all of the provided Promises resolve, or rejected when any Promise is rejected.

const promise1 = Promise.resolve('The most successful value!'); // Change to Promise.reject to see behavior of Promise.all
const promise2 = fetch('https://picsum.photos/seed/picsum/200/300') // Fetch image
                    .then((response) => {
                        return response.blob()
                    })
                    .then((image) => {
                        return URL.createObjectURL(image);
                    });

Promise.all([promise1, promise2])
    .then((values) => {
        console.log(values); // values returned when all Promises resolved

        const imgElement = document.createElement('img'); // Create html <img> node
        document.body.appendChild(imgElement); // append this node to body
        imgElement.src = values[1]; // Set source for image
    })
    .catch((error) => console.warn(`Got rejected: ${error}`)); // Catch error if any of promises got rejected
