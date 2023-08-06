let str = '   foo   ';

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

console.log(str.replace(/\s/g, ''));
console.log(str.replace(/^\s+/g, ''));
console.log(str.replace(/\s+$/g, ''));

str = 'abc';

console.log(str.repeat());
console.log(str.repeat(0));
console.log(str.repeat(1));
console.log(str.repeat(2));
console.log(str.repeat(2.5));
// console.log(str.repeat(-1)); Error

str = 'Hello world';

console.log(str.replace('world', 'Lee'));

str = 'Hello world world';

console.log(str.replace('world', 'Lee'));

console.log(str.replace('world', '<strong>$&</strong>'));

console.log(str.replace(/world/gi, 'Lee'));