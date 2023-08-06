// import "@babel/polyfill";
import { pi, power, Foo } from './4907.js';

console.log(pi);
console.log(power(pi, pi));

const f = new Foo();
console.log(f.foo());
console.log(f.bar());

console.log(new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 100);
}));

console.log(Object.assign({}, { x: 1 }, { y: 2 }));

console.log(Array.from([1, 2, 3], v => v + v));