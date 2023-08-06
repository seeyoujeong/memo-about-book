var foo = null ?? 'default string';
console.log(foo);

foo = '' || 'default string';
console.log(foo);

foo = '' ?? 'default string';
console.log(foo);