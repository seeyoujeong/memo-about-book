var person = {
    name: 'Lee'
};

var copy = person;

console.log(copy === person);

copy.name = 'Kim';

person.address = 'Seoul';

console.log(person);
console.log(copy);

var person1 = {
    name: 'Lee'
};

var person2 = {
    name: 'Lee'
};

console.log(person1 === person2);
console.log(person1.name === person2.name);