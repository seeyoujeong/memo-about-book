const base = {
    name: 'Lee',
    sayHi() {
        return `Hi! ${this.name}`;
    }
};

const derived = {
    __proto__: base,
    sayHi() {
        return `${super.sayHi()}. How are you doing?`;
    },
    // sayHello: function () {
    //     return `${super.sayHi()}. How are you doing?`; // Error
    // }
};

console.log(derived.sayHi());

