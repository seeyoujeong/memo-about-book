var person = {
    name: 'Lee'
};

person.name = 'Kim';

console.log(person);

person.age = 20;

console.log(person);

delete person.age;
delete person.address; // no error

console.log(person);