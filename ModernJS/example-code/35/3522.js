const obj = { x: 1, y: 2 };
const copy = { ...obj };
console.log(copy);
console.log(obj === copy);

let merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
console.log(merged);

merged = Object.assign({}, { x: 1, y: 2 }, { y: 10, z: 3 });
console.log(merged);

let changed = Object.assign({}, { x: 1, y: 2 }, { y: 100 });
console.log(changed);

let added = Object.assign({}, { x: 1, y: 2 }, { z: 0 });
console.log(added);

merged = { ...{ x: 1, y: 2}, ...{ y: 10, z: 3 } };
console.log(merged);

changed = { ...{ x: 1, y: 2 }, y: 100 };
console.log(changed);

added = { ...{ x: 1, y: 2 }, z: 0 };
console.log(added);