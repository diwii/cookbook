import GAME from './game.js';

export class Entity {
    x = 0;
    y = 0;
    height = 0;
    width = 0;
    speed = 0;
    color = 'white';
    initColor = '';
    collision = false;

    direction = {
        x: 1,
        y: 1,
        moveX: 0,
        moveY: 0,
    };

    constructor(x = 0, y = 0, width = 10, height = 10, speed = 1, color = 'white') {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speed = speed;
        this.color = color;
        this.initColor = color;

        this.init();
    };

    init() {
        this.GAME = GAME.addEntity(this);
    };

    draw(ctx) {
        this.animation();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        if (this.x > ctx.canvas.width) {
            this.x = 0;
        }

        if (this.x < 0) {
            this.x = ctx.canvas.width;
        }

        if (this.y > ctx.canvas.height) {
            this.y = 0;
        }

        if (this.y < 0) {
            this.y = ctx.canvas.height;
        }
    };

    animation() {
        let directionX = this.speed * this.direction.x * this.direction.moveX;
        let directionY = this.speed * this.direction.y * this.direction.moveY;

        this.x += directionX;
        this.y += directionY;

        let collisionColor = 'red';
        if (this.collision) {
            this.color = collisionColor;
        } else {
            this.color = this.initColor;
        }
    };

    setCollision(state = true) {
        this.collision = state;
    }

    intersects(entity) {
        let intersectX = this.x + this.width > entity.x && this.x < entity.x + entity.width;
        let intersectY = this.y + this.height > entity.y && this.y < entity.y + entity.height;

        if (intersectX && intersectY ){
            console.log('WE COLLIDE');

            this.collision = true;
            entity.collision = true;
            return true;
        }
    
        this.collision = false;
        entity.collision = false;
        return false;
    }
}
