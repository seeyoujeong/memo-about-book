const obj = { x: 1 };

console.log(obj.constructor === Object);
console.log(obj.hasOwnProperty('x'));

const obj1 = new Object();
obj1.x = 1;

console.log(obj1.constructor === Object);
console.log(obj1.hasOwnProperty('x'));