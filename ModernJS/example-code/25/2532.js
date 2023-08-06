class Person {
    constructor(name) {
        console.log(this);
        console.log(Object.getPrototypeOf(this) === Person.prototype);

        this.name = name;
    }
}

const person = new Person('Lee');

console.log(person);