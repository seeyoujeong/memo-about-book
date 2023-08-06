const s1 = Symbol.for('mySymbol');

const s2 = Symbol.for('mySymbol');

console.log(s1 === s2);

console.log(Symbol.keyFor(s1));

const s3 = Symbol('foo');

console.log(Symbol.keyFor(s3));