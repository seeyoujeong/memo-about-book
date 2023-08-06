function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
};

Person.staticProp = 'static prop';

Person.staticMethod = function () {
    console.log('staticMethod');
};

const me = new Person('Lee');

Person.staticMethod();
// me.staticMethod();

const obj = Object.create({ name: 'Lee' });

console.log(obj.hasOwnProperty('name'));

function Foo() {}

Foo.prototype.x = function () {
    console.log('x');
};

const foo = new Foo();

foo.x();

Foo.x = function () {
    console.log('x');
};

Foo.x();