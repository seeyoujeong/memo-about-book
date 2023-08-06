const obj = Object.create(null);

console.log(obj.__proto__);

console.log(Object.getPrototypeOf(obj));

const obj1 = {};
const parent = { x: 1 };

Object.getPrototypeOf(obj1);
Object.setPrototypeOf(obj1, parent);

console.log(obj1.x);