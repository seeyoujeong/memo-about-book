const person = { name: 'Lee' };

console.log(Object.isFrozen(person));

Object.freeze(person);

console.log(Object.isFrozen(person));

console.log(Object.getOwnPropertyDescriptors(person));

person.age = 20; // 무시
console.log(person);

delete person.name; // 무시
console.log(person);

person.name = 'Kim'; // 무시
console.log(person);

// Object.defineProperty(person, 'name', { configurable: true });