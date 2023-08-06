// Bad
function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = () => console.log(`Hi ${this.name}`);

const person = new Person('Lee');
person.sayHi();

// Good
function Person1(name) {
    this.name = name;
}

Person1.prototype.sayHi = function () { console.log(`Hi ${this.name}`); };

const person1 = new Person1('Kim');
person1.sayHi();