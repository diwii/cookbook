export default {
    PARTICLES: [],
    ENTITIES: [],
    player: {
        canFireFrameCount: 0,
        canFireEvery: 1,
        canFire: true,
    },

    addEntity: function(entity) {
        this.ENTITIES.push(entity);
        
        return this;
    },

    addParticle: function(particle) {
        this.PARTICLES.push(particle);

        return this;
    },

    playerShoot: function(event) {
        const player = event.detail; // <- access to player object
        this.player.canFire = false;
    },

    playerCanFire: function() {
        return this.player.canFire;
    }

    // subscribe: function(subscriber, callBack) {
    //     this.ENTITIES[subscriber].push(subscriber);
    // },

    // unsubscribe: function(subscriber, eventName) {
    //     const index = this.subscribers[eventName].indexOf(subscriber);
    //     this.subscribers[eventName].splice(index, 1);
    // },
}
