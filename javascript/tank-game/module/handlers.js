export const handle = {
    subscribers: {
        'click': [],
        'keydown': [],
        'keyup': [],
        'playerShoot': []
    },

    subscribe: function(subscriber, eventName) {
        this.subscribers[eventName].push(subscriber);
    },

    unsubscribe: function(subscriber, eventName) {
        const index = this.subscribers[eventName].indexOf(subscriber);
        this.subscribers[eventName].splice(index, 1);
    },

    broadcast: function(eventName, event) {
        for (const subscriber of this.subscribers[eventName]) {
            subscriber[eventName](event);
        }
    },

    keydown: function(event) {
        this.broadcast('keydown', event);
    },

    keyup: function(event) {
        this.broadcast('keyup', event);
    },

    click: function(event) {
        this.broadcast('click', event);
    },

    playerShoot: function(event) {
        this.broadcast('playerShoot', event);
    }
};
