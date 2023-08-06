const obj = new Object();
console.log(obj.constructor === Object);

const add = new Function('a', 'b', 'return a + b');
console.log(add.constructor === Function);

function Person(name) {
    this.name = name;
}

const me = new Person('Lee');
console.log(me.constructor === Person);