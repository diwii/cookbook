import { handle } from './handlers.js';

export function listenForEvents() {
    window.addEventListener('keydown', handle['keydown'].bind(handle));
    window.addEventListener('keyup', handle['keyup'].bind(handle));
    window.addEventListener('click', handle['click'].bind(handle));
}
