// eval
console.log(eval('1 + 2;'));
eval('var x = 5;');

console.log(x);

const o = eval('({ a: 1 })');
console.log(o);

const f = eval('(function() { return 1; })');
console.log(f());