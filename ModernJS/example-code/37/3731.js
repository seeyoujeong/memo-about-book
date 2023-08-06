const map = new Map();
console.log(map);

map.set('key1', 'value1');
console.log(map);

map
   .set('key2', 'value2')
   .set('key3', 'value3');

console.log(map);

map
   .set('key4', 'value4')
   .set('key4', 'value5');

console.log(map);

map.set(NaN, 'value6').set(NaN, 'value7');
console.log(map);

map.set(0, 'value8').set(-0, 'value9');
console.log(map);

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

map.set(lee, 'developer').set(kim, 'designer');

console.log(map);