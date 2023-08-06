function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

const parent = {
    // constructor: Person,
    sayHello() {
        console.log(`Hi! My name is ${this.name}`);
    }
};

// Person.prototype = parent;

Object.setPrototypeOf(me, parent);
// 위와 동일 -> me.__proto__ = parent;

me.sayHello();

console.log(me.constructor === Person); // constructor -> true
console.log(me.constructor === Object); // constructor -> false

console.log(Person.prototype === Object.getPrototypeOf(me)); // constructor -> true