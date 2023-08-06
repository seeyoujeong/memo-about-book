class Base {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `Hi ${this.name}`;
    }
}

class Derived extends Base {
    sayHi = () => `${super.sayHi()}. How are you doing?`;
}

const derived = new Derived('Lee');
console.log(derived.sayHi());