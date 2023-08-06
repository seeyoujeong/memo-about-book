const set = new Set([1, 2, 3]);

console.log(set.has(2));
console.log(set.has(4));

set.delete(2);
console.log(set);

set.delete(0); // ignore
console.log(set);

// set.delete(1).delete(3); // Error

set.clear();
console.log(set);