// The export statement is used when creating JavaScript modules
export default {
    description: 'I\'m object with some methods',
    tag: 'example',

    // Arrow functions Does not have its own bindings to this or super, and should not be used as methods.
    // Following code is incorrect
    describe: () => {
        console.log(this);
        console.log(this.description);
    },

    // Object method should be defined like this:
    whoAmI: function () {
        console.log(this);
    },

    sing: () => {
        console.log('In the middle of the night, I go walking down the street...');
    }
}
