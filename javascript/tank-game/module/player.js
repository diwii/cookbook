import { Entity } from './entity.js';
import { handle } from './handlers.js';
import { Particle } from './particle.js';
import { getKey } from './key.js';

export class Player extends Entity {
    keysPressed = {};
    face = 'up';

    init() {
        super.init();

        this.x = 300;
        this.y = 300;
        this.color = 'white';
        this.width = 100;
        this.height = 100;
        this.speed = 10;

        handle.subscribe(this, 'keydown');
        handle.subscribe(this, 'keyup');
    };

    keyup(event) {
        switch(getKey(event)) {
            case 'ArrowUp': delete this.keysPressed['ArrowUp'];
            break;
            case 'ArrowLeft': delete this.keysPressed['ArrowLeft'];
            break;
            case 'ArrowRight': delete this.keysPressed['ArrowRight'];
            break;
            case 'ArrowDown': delete this.keysPressed['ArrowDown'];
            break;
            case 'Space': delete this.keysPressed['Space'];
            break;
        }
    }

    keydown(event) {
        switch(getKey(event)) {
            case 'ArrowUp': this.keysPressed['ArrowUp'] = this.moveUp.bind(this);
            break;
            case 'ArrowLeft': this.keysPressed['ArrowLeft'] = this.moveLeft.bind(this);
            break;
            case 'ArrowRight': this.keysPressed['ArrowRight'] = this.moveRight.bind(this);
            break;
            case 'ArrowDown': this.keysPressed['ArrowDown'] = this.moveDown.bind(this);
            break;
            case 'Space': this.keysPressed['Space'] = this.shoot.bind(this);
            break;
        }
    };

    shoot() {
        if (!this.GAME.playerCanFire()) return;

        const playerShootEvent = new CustomEvent('playerShoot', { detail: this });
        let particle = new Particle(
            this.x + this.width / 2,
            this.y + this.height / 2,
            10,
            10,
            5
        );
        particle.color = 'orange';

        switch (this.face) {
            case 'up':
                particle.direction.y = -1;
                particle.direction.moveY = 1;
                break;
            case 'down':
                particle.direction.y = 1;
                particle.direction.moveY = 1;
                break;
            case 'left':
                particle.direction.x = -1;
                particle.direction.moveX = 1;
                break;
            case 'right':
                particle.direction.x = 1;
                particle.direction.moveX = 1;
                break;
        }

        this.GAME.PARTICLES.push(particle); // Dependency????
        window.dispatchEvent(playerShootEvent);
    }

    moveUp() {
        this.y -= this.speed;
        this.face = 'up';
    }

    moveDown() {
        this.y += this.speed;
        this.face = 'down';
    }

    moveLeft() {
        this.x -= this.speed;
        this.face = 'left';
    }

    moveRight() {
        this.x += this.speed;
        this.face = 'right';
    }

    animation() {
        for (const handleName in this.keysPressed) {
            this.keysPressed[handleName]()
        }
    }
}
