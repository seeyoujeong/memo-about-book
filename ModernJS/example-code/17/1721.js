let obj = new Object();
console.log(obj);

obj = Object();
console.log(obj);

let f = new Function('x', 'return x ** x');
console.log(f);

f = Function('x', 'return x ** x');
console.log(f);

const str = String(123);
console.log(str, typeof str);

const num = Number('123');
console.log(num, typeof num);

const bool = Boolean('true');
console.log(bool, typeof bool);