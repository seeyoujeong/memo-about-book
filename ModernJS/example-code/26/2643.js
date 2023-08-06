function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor: Person,
    sayHi() { console.log(`Hi ${this.name}`); }
};

const person = new Person('Lee')
person.sayHi();