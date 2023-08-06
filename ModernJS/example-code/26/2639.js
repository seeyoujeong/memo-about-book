// Bad
const person = {
    name: 'Lee',
    sayHi: () => console.log(`Hi ${this.name}`)
};

person.sayHi();

// Good
const person1 = {
    name: 'Kim',
    sayHi() {
        console.log(`Hi ${this.name}`);
    }
};

person1.sayHi();