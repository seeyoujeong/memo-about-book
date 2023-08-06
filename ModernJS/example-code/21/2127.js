const x = 15;

console.log(x.toString(2));
console.log(parseInt(x.toString(2), 2));

console.log(x.toString(8));
console.log(parseInt(x.toString(8), 8));

console.log(x.toString(16));
console.log(parseInt(x.toString(16), 16));

console.log(x.toString());
console.log(parseInt(x.toString()));

console.log(parseInt('0xf'));
console.log(parseInt('f', 16));

console.log(parseInt('0b10')); // 제대로 해석X
console.log(parseInt('10', 2));

console.log(parseInt('0o10')); // 제대로 해석X
console.log(parseInt('10', 8));

console.log(parseInt('A0'));
console.log(parseInt('20', 2));

console.log(parseInt('1A0'));
console.log(parseInt('102', 2));
console.log(parseInt('58', 8));
console.log(parseInt('FG', 16));
