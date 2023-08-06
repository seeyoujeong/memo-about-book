const person = new Object();

person.name = 'Lee';
person.sayHello = function () {
    console.log('Hi! My name is ' + this.name);
};

console.log(person);
person.sayHello();