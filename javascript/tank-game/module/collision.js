import GAME from './game.js';

export function collision() {
    // const player = GAME.ENTITIES[0];
    // const entity = GAME.ENTITIES[1];

    // let collideX = player.x + player.width > entity.x && player.x < entity.x + entity.width;
    // let collideY = player.y + player.height > entity.y && player.y < entity.y + entity.height;

    // if (collideX && collideY ){
    //     console.log('WE COLLIDE');
    // }

    // if (player.x + player.width > entity.x && player.x < entity.x + entity.width) {
    //     console.log('collide on X');
    // }

    // if (player.y + player.height > entity.y && player.y < entity.y + entity.height) {
    //     console.log('collide on Y');
    // }
    // for (let entity1 of GAME.ENTITIES) {
    //     for (let entity2 of GAME.ENTITIES) {
    //         if (entity1 === entity2) {
    //             continue;
    //         }

    //         if (isCollide(entity1, entity2)) {
    //             entity1.collision = true;
    //             entity2.collision = true;
    //             // entity1.setCollision(true);
    //             // entity2.setCollision(true);
    //             // console.log('set');
    //         } else {
    //             entity1.collision = false;
    //             entity2.collision = false;
    //             // entity1.setCollision(false);
    //             // entity2.setCollision(false);
    //         }
    //     }
    // }
}

function isCollide(player, entity2) {
    // let collideX = player.x + player.width > entity2.x && player.x < entity2.x + entity2.width;
    // let collideY = player.y + player.height > entity2.y && player.y < entity2.y + entity2.height;

    if (collideX && collideY ){
        console.log('WE COLLIDE');
        return true;
    }

    return false;
}
