import { listenForEvents } from './module/listeners.js';
import { Player } from './module/player.js';
import GAME from './module/game.js';
import { handle } from './module/handlers.js';
import { collision } from './module/collision.js';

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
handle.subscribe(GAME, 'playerShoot');

window.GAME = GAME;
let player = new Player;

createEntities(); // For testing
const intervalId = setInterval(() => {
    // console.log(GAME.PARTICLES.length);
    console.log(GAME.ENTITIES.length);
}, 1000);

// GAME.collisionCheckInterval = 1000;
// GAME.lastCollisionCheck = Date.now();

let start = Date.now();
let frameCount = 0;
let checkColision = false;

const cellWidth = Math.floor(GAME.ctx.canvas.width / 10);
const cellHeight = Math.floor(GAME.ctx.canvas.height / 10);




function animate() {
    let dateNow = Date.now();
    if (GAME.player.canFireFrameCount++ > GAME.player.canFireEvery) {
        GAME.player.canFire = true;

        GAME.player.canFireFrameCount = 0;
    }

    // if (dateNow - start > 100) {
    //     checkColision = true;
    //     start = Date.now();
    // } else {
    //     checkColision = false;
    // }
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // console.log('aa');
    grid(cellWidth, cellHeight, GAME.ctx.canvas.width, GAME.ctx.canvas.height);


    for (let particle of GAME.PARTICLES) {
        particle.draw(ctx);
    }

    for (let entity of GAME.ENTITIES) {
        if (checkColision) {
            for (let entity2 of GAME.ENTITIES) {
                if (entity === entity2) continue;

                entity.intersects(entity2);
                console.log('check collision');
                // if (GAME.collisionCheckInterval > dateNow - GAME.lastCollisionCheck) {
                //     console.log('pls check collision');
                //     GAME.lastCollisionCheck = dateNow;
                // }
    
                // entity.intersects(entity2);
            }
        }

        entity.draw(ctx);
    }
    // collision();
    requestAnimationFrame(animate);
}

animate();

function grid(cellWidth, cellHeight, width, height) {
    for (let x = cellWidth; x < width; x += cellWidth) {
        ctx.lineWidth = .5;
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }

    for (let y = cellHeight; y < height; y += cellHeight) {
        ctx.lineWidth = .5;
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
}
