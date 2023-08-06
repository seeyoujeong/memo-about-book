console.log(NaN === NaN);

console.log(isNaN(NaN));
console.log(isNaN(10));
console.log(isNaN(1 + undefined)); // +undefined -> NaN

console.log(0 === -0);
console.log(0 == -0);

console.log(Object.is(-0, +0));
console.log(Object.is(NaN, NaN));