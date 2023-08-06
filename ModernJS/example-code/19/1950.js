const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    Person.prototype = {
        // constructor: Person,
        sayHello() {
            console.log(`Hi! My name is ${this.name}`);
        }
    };

    return Person;
}());

const me = new Person('Lee');

console.log(me.constructor === Person);

console.log(me instanceof Person);
console.log(me instanceof Object);