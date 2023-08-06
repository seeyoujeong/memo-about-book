// obj -> null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null);

// obj -> Object.prototype -> null
// obj = {};
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype);

// obj -> Object.prototype -> null
// obj = { x: 1 };
obj = Object.create(Object.prototype, {
    x: { value: 1, writable: true, enumerable: true, configurable: true }
});
// obj = Object.create(Object.prototype);
// obj.x = 1;

console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === Object.prototype);

const myProto = { x: 10 };

// obj -> myProto -> Object.prototype -> null
obj = Object.create(myProto);
console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === myProto);

function Person(name) {
    this.name = name;
}

// obj -> Person.prototype -> Object.prototype -> null
// obj = new Person('Lee');
obj = Object.create(Person.prototype);
obj.name = 'Lee';
console.log(obj.name);
console.log(Object.getPrototypeOf(obj) === Person.prototype);
