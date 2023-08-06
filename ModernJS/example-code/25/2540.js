class Person {
    name = 'Lee';
    // this.name = ''; // Error

    constructor() {
        // console.log(name); // Error
    }

    age;

    getName = function () {
        return this.name;
    }

    // getName = () => this.name;
}

const me = new Person();
console.log(me);
console.log(me.getName());