import GAME from './game.js';

export class Entity {
    x = 0;
    y = 0;
    height = 0;
    width = 0;
    speed = 0;
    color = 'white';

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

        this.init();
    };

    init() {
        this.GAME = GAME.addEntity(this);
    };

    draw(ctx) {
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

        this.animation();
    };

    animation() {
        let directionX = this.speed * this.direction.x * this.direction.moveX;
        let directionY = this.speed * this.direction.y * this.direction.moveY;

        this.x += directionX;
        this.y += directionY;
    };
}
