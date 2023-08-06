const obj = {};
const parent = { x: 1 };

obj.__proto__;

obj.__proto__ = parent;

console.log(obj.x);

const person = { name: 'Lee' };

console.log(person.hasOwnProperty('__proto__'));

console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));

console.log({}.__proto__ === Object.prototype);