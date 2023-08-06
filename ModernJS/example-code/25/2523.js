class Person {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hi! My name is ${this.name}`);
    }
}

const me = new Person('Lee');
me.sayHi();

console.log(Object.getPrototypeOf(me) === Person.prototype);
console.log(me instanceof Person);

console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
console.log(me instanceof Object);

console.log(me.constructor === Person);