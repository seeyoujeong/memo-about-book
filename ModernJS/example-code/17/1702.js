const strObj = new String('Lee');
console.log(typeof strObj);
console.log(strObj);

const numObj = new Number(123);
console.log(typeof numObj);
console.log(numObj);

const boolObj = new Boolean(true);
console.log(typeof boolObj);
console.log(boolObj);

const func = new Function('x', 'return x * x');
console.log(typeof func);
console.dir(func);
console.log(func);

const arr = new Array(1, 2, 3);
console.log(typeof arr);
console.log(arr);

const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp);
console.log(regExp);

const date = new Date();
console.log(typeof date);
console.log(date);