const obj = Object.create(null);
obj.a = 1;

console.log(Object.getPrototypeOf(obj) === null);
// console.log(obj.hasOwnProperty('a')); // Error

console.log(Object.prototype.hasOwnProperty.call(obj, 'a'));