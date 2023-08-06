// ES5
const arr = [1, 2, 3];

let one = arr[0];
let two = arr[1];
let three = arr[2];

console.log(one, two, three);

// ES6
[one, two, three] = arr;

console.log(one, two, three);

const [x, y] = [1, 2];

// const [x1, y1]; // Error

// const [a, b] = {}; // Error

let x1, y1;
[x1, y1] = [1, 2];

const [a, b] = [1, 2];
console.log(a, b);

const [c, d] = [1];
console.log(c, d);

const [e, f] = [1, 2, 3];
console.log(e, f);

const [g, , h] = [1, 2, 3];
console.log(g, h);

const [i, j, k = 3] = [1, 2];
console.log(i, j, k);

const [l, n = 10, m = 3] = [1, 2]; // 할당된 값이 우선
console.log(l, n, m);