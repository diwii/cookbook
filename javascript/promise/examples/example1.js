const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const codeBlocker = () => {
    // =========================================
    // This blocks all other code from executing
    // =========================================

    // let i = 0;
    // while (i < 1000000000) {
    //     i++;
    // }

    // return 'Billion'

    // =========================================
    // Also blocks all other code from executing
    // =========================================

    // return new Promise((resolve, reject) => {
    //     let i = 0;
    //     while (i < 1000000000) {
    //         i++;
    //     }

    //     resolve('Billion');
    // });

    return Promise.resolve()
        .then(() => {
            let i = 0;
            while (i < 1000000000) {
                i++;
            }
            
            return 'Billion';
        });
}

log('Synchronous 1');

codeBlocker().then(log);

log('Synchronous 2');
