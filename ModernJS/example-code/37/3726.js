const map = new Map();
console.log(map);

const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map1);

// const map2 = new Map([1, 2]); // Error 

const map3 = new Map([['key1', 'value1'], ['key1', 'value2']]); // 덮어써짐
console.log(map3);

const { size } = new Map([['key1', 'value'], ['key2', 'value2']]);
console.log(size);

console.log(Object.getOwnPropertyDescriptor(Map.prototype, 'size'));

map1.size = 10; // ignore
console.log(map1.size);