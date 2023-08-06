const person = {
    name: 'Lee',
    address: { city: 'Seoul' }
};

Object.freeze(person);

console.log(Object.isFrozen(person));
console.log(Object.isFrozen(person.address));

person.address.city = 'Busan';
console.log(person);