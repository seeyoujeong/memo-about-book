const person = {
    name: 'Lee',
    getName() {
        return this.name;
    }
};

console.log(person.getName());

const anotherPerson = {
    name: 'Kim'
};

anotherPerson.getName = person.getName;

console.log(anotherPerson.getName());

const getName = person.getName;

console.log(getName());

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

const me = new Person('Lee');

console.log(me.getName());

Person.prototype.name = 'Kim';

console.log(Person.prototype.getName());