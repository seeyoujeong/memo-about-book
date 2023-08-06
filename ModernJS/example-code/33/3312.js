const obj = {
    [Symbol.for('mySymbol')]: 1
};

console.log(obj[Symbol.for('mySymbol')]);

for (const key in obj) {
    console.log(key); // 아무것도 출력되지 않는다.
}

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));

console.log(Object.getOwnPropertySymbols(obj));

const symbolKey1 = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[symbolKey1]);

Array.prototype[Symbol.for('sum')] = function () {
    return this.reduce((acc, cur) => acc + cur, 0);
};

console.log([1, 2][Symbol.for('sum')]());