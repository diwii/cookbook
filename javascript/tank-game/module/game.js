export default {
    PARTICLES: [],
    ENTITIES: [],

    addEntity: function(entity) {
        this.ENTITIES.push(entity);
        
        return this;
    }

    // subscribe: function(subscriber, callBack) {
    //     this.ENTITIES[subscriber].push(subscriber);
    // },

    // unsubscribe: function(subscriber, eventName) {
    //     const index = this.subscribers[eventName].indexOf(subscriber);
    //     this.subscribers[eventName].splice(index, 1);
    // },
}
