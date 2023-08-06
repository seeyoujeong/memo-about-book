console.log(Math.sqrt(9)); // 제곱근
console.log(Math.sqrt(-9));
console.log(Math.sqrt(2));
console.log(Math.sqrt());

console.log(Math.random()); // 0이상 1미만

const random = Math.floor((Math.random() * 10) + 1);
console.log(random);

console.log(Math.pow(2, 8));
console.log(Math.pow(2, -1));
console.log(Math.pow(2));
console.log(2 ** 2 ** 2);
console.log(Math.pow(Math.pow(2, 2), 2));

console.log(Math.max(1));
console.log(Math.max(1, 2));
console.log(Math.max(1, 2, 3));
console.log(Math.max());
console.log(Math.max.apply(null, [1, 2, 3]));
console.log(Math.max(...[1, 2, 3]));

console.log(Math.min(1));
console.log(Math.min(1, 2));
console.log(Math.min(1, 2, 3));
console.log(Math.min());
console.log(Math.min.apply(null, [1, 2, 3]));
console.log(Math.min(...[1, 2, 3]));