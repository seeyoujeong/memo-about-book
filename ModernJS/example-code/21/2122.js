console.log(isNaN(NaN));
console.log(isNaN(10));

console.log(isNaN('blabla'));
console.log(isNaN('10'));
console.log(isNaN('10.12'));
console.log(isNaN(''));
console.log(isNaN(' '));

console.log(isNaN(true));
console.log(isNaN(null));

console.log(isNaN(undefined));

console.log(isNaN({}));

console.log(isNaN(new Date()));
console.log(isNaN(new Date().toString()));