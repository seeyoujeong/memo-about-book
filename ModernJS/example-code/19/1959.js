const person = {
    name: 'Lee',
    address: 'Seoul'
};

console.log('name' in person);
console.log('address' in person);
console.log('age' in person);

console.log('toString' in person);

console.log(Reflect.has(person, 'name'));
console.log(Reflect.has(person, 'toString'));

console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('age'));
console.log(person.hasOwnProperty('toString'));