const person = { name: 'Lee' };

console.log(Object.isSealed(person));

Object.seal(person);

console.log(Object.isSealed(person));

console.log(Object.getOwnPropertyDescriptors(person));

person.age = 20; // 무시
console.log(person);

delete person.name; // 무시
console.log(person);

person.name = 'Kim';
console.log(person);

// Object.defineProperty(person, 'name', { configurable: true });