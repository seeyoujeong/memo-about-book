class Person {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hi! My name is ${this.name}`);
    }

    static sayHello() {
        console.log('Hello!');
    }
}

const me = new Person('Lee');

console.log(me.name);
me.sayHi();
Person.sayHello();