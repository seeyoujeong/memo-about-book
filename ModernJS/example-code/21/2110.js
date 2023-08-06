var foo = 1;
console.log(globalThis.foo); // ?

bar = 2;
console.log(globalThis.bar);

function baz() { return 3; }
console.log(globalThis.baz); // ?