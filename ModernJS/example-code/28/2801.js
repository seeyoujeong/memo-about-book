let numObj = new Number();
console.log(numObj);

numObj = new Number('10');
console.log(numObj);

numObj = new Number('Hello');
console.log(numObj);

function isEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));

console.log(Number.MAX_VALUE);
console.log(Infinity > Number.MAX_VALUE);

console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE > 0);

console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.POSITIVE_INFINITY);

console.log(Number.NEGATIVE_INFINITY);

console.log(Number.NaN);