function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

console.log(me instanceof Person);
console.log(me instanceof Object);

const you = new Person('Kim');

const parent = {};

Object.setPrototypeOf(you, parent);

console.log(Person.prototype === parent);
console.log(parent.constructor === Person);

console.log(you instanceof Person);
console.log(you instanceof Object);

Person.prototype = parent;

console.log(you instanceof Person);

function isInstanceof(instance, constructor) {
    const prototype = Object.getPrototypeOf(instance);

    if (prototype === null) return false;

    return prototype === constructor.prototype || isInstanceof(prototype, constructor);
}

console.log(isInstanceof(you, Person));
console.log(isInstanceof(you, Object));
console.log(isInstanceof(you, Array));