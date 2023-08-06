const counter = {
    num: 1,
    increase: () => ++this.num
};

console.log(counter.increase());

globalThis.x = 1; // ?

const normal = function () { return this.x; };
const arrow = () => this.x;

console.log(normal.call({ x: 10 }));
console.log(arrow.call({ x: 10 }));

const add = (a, b) => a + b;

console.log(add.call(null, 1, 2));
console.log(add.apply(null, [1, 2]));
console.log(add.bind(null, 1, 2)());