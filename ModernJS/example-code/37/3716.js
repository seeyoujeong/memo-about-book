const set = new Set([1, 2, 3]);

set.forEach((v, v2, set) => console.log(v, v2, set));

console.log(Symbol.iterator in set);

for (const value of set) {
    console.log(value);
}

console.log([...set]);

const [a, ...rest] = set;
console.log(a, rest);