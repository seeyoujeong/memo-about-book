// Bad 
class Person {
    name = 'Lee';
    sayHi = () => console.log(`Hi ${this.name}`);
}

// 위와 동일
// class Person {
//     constructor() {
//         this.name = 'Lee';
//         this.sayHi = () => console.log(`Hi ${this.name}`);
//     }
// }

const person = new Person();
person.sayHi();

// Good
class Person1{
    name = 'Lee';
    sayHi() { console.log(`Hi ${this.name}`); }
}

const person1 = new Person1();
person1.sayHi();