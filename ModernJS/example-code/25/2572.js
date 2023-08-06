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
    }
};

console.log(derived.sayHi());

class Base {
    static sayHi() {
        return 'Hi!';
    }
}

class Derived extends Base {
    static sayHi() {
        return `${super.sayHi()}. How are you doing?`;
    }
}

console.log(Derived.sayHi());