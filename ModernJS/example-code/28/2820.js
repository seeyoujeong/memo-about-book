console.log(Number.isSafeInteger(0));
console.log(Number.isSafeInteger(1000000000000000));

console.log(Number.isSafeInteger(10000000000000001));
console.log(Number.isSafeInteger('123'));
console.log(Number.isSafeInteger(false));
console.log(Number.isSafeInteger(Infinity));

console.log((77.1234).toExponential());
console.log((77.1234).toExponential(4));
console.log((77.1234).toExponential(2));

// console.log(77.toExponential()); // Error 소수 구분 기호로 해석
console.log(77.1234.toExponential());
console.log((77).toExponential());
console.log(77 .toExponential()); // 공백

console.log((12345.6789).toFixed());
console.log((12345.6789).toFixed(1));

console.log((12345.6789).toPrecision());
console.log((12345.6789).toPrecision(1));
console.log((12345.6789).toPrecision(2));
console.log((12345.6789).toPrecision(6));

console.log((10).toString()); // 10진수
console.log((16).toString(2)); // 2진수
console.log((16).toString(8)); // 8진수
console.log((16).toString(16)); // 16진수