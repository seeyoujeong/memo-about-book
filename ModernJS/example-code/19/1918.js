let obj = new Object();
console.log(obj);

class Foo extends Object {}
console.log(new Foo());

obj = new Object(123);
console.log(obj);

obj = new Object('123');
console.log(obj);