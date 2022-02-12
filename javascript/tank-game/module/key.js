export function getKey(event) {
    if (event.code === 'ArrowUp' || event.key === 'ArrowUp' || event.keyCode === 38) {
        return 'ArrowUp';
    }

    if (event.code === 'ArrowLeft' || event.key === 'ArrowLeft' || event.keyCode === 37) {
        return 'ArrowLeft';
    }

    if (event.code === 'ArrowRight' || event.key === 'ArrowRight' || event.keyCode === 39) {
        return 'ArrowRight';
    }

    if (event.code === 'ArrowDown' || event.key === 'ArrowDown' || event.keyCode === 40) {
        return 'ArrowDown';
    }

    if (event.code === 'Space' || event.key === ' ' || event.keyCode === 32) {
        return 'Space';
    }

    return event.code;
}
