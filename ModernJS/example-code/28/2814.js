console.log(Number.isFinite(0));
console.log(Number.isFinite(Number.MAX_VALUE));
console.log(Number.isFinite(Number.MIN_VALUE));

console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));

console.log(Number.isFinite(NaN));

console.log(Number.isFinite(null)); // 암묵적 타입 변환X
console.log(isFinite(null));

console.log(Number.isInteger(0));
console.log(Number.isInteger(123));
console.log(Number.isInteger(-123));

console.log(Number.isInteger(0.5));
console.log(Number.isInteger('123'));
console.log(Number.isInteger(false));

console.log(Number.isNaN(NaN));

console.log(Number.isNaN(undefined));
console.log(isNaN(undefined));