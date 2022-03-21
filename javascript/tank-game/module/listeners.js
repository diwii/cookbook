import { handle } from './handlers.js';

export function listenForEvents() {
    const events = [
        'keydown',
        'keyup',
        'click',
        'playerShoot'
    ];

    for (const eventName of events) {
        window.addEventListener(eventName, handle[eventName].bind(handle));
    }

    // window.addEventListener('keydown', handle['keydown'].bind(handle));
    // window.addEventListener('keyup', handle['keyup'].bind(handle));
    // window.addEventListener('click', handle['click'].bind(handle));
    // window.addEventListener('playerShoot', handle['shoot'].bind(handle));
}
