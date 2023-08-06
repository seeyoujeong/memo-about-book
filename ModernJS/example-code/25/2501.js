var Person = (function () {
    function Person(name) {
        this.name = name;
    }

    Person.prototype.sayHi = function () {
        console.log('Hi! My name is ' + this.name);
    };

    return Person;
}());

var me = new Person('Lee');
me.sayHi();