const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

map.forEach((v, k, map) => console.log(v, k, map));

console.log(Symbol.iterator in map);

for (const entry of map) {
    console.log(entry);
}

console.log([...map]);

const [a, b] = map;
console.log(a, b);

for (const key of map.keys()) {
    console.log(key);
}

for (const value of map.values()) {
    console.log(value);
}

for (const entry of map.entries()) {
    console.log(entry);
}