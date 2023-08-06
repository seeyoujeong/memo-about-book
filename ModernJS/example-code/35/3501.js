console.log(...[1, 2, 3]);

console.log(...'Hello');

console.log(...new Map([['a', '1'], ['b', '2']]));
console.log(...new Set([1, 2, 3]));

// console.log(...{ a: 1, b: 2 }); // Error

// const list = ...[1, 2, 3]; // Error

const arr = [1, 2, 3];

let max = Math.max(arr);

console.log(Math.max(1, 2, 3));

max = Math.max.apply(null, arr);

max = Math.max(...arr);

console.log(max);

function foo(...rest) {
    console.log(rest);
}

foo(...[1, 2, 3]);