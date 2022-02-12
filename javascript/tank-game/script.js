import { listenForEvents } from './module/listeners.js';
import { Player } from './module/player.js';
import GAME from './module/game.js';

// For testing
import { createEntities } from './module/test/createEntities.js';

document.body.style.width = '100vw';
document.body.style.height = '100vh';
document.body.style.margin = 0;

listenForEvents();

const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
ctx.canvas.width = document.body.clientWidth;
ctx.canvas.height = document.body.clientHeight;
GAME.ctx = ctx;
GAME.canvas = canvas;

let player = new Player;

createEntities(); // For testing

function animate() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let particle of GAME.PARTICLES) {
        particle.draw(ctx);
    }

    for (let entity of GAME.ENTITIES) {
        entity.draw(ctx);
    }

    requestAnimationFrame(animate);
}

animate();
