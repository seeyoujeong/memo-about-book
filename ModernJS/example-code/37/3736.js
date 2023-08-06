const map = new Map();

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

map.set(lee, 'developer').set(kim, 'designer');

console.log(map.get(lee));
console.log(map.get('key'));

console.log(map.has(lee));
console.log(map.has('key'));

map.delete(kim);
console.log(map);

map.delete('key1'); // ignore
console.log(map);

// map.delete(lee).delete(kim); // Error 불리언 값을 반환하기 때문

map.set(kim, 'designer');
console.log(map);

map.clear();
console.log(map);