var key = Symbol("key");
console.log(typeof key);

var obj = {};

obj[key] = "value";
console.log(obj[key]);