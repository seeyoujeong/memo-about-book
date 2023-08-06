class Person {
    constructor(name) {
        this.name = name;

        return {};
    }
}

const me = new Person('Lee');
console.log(me);

class Person1 {
    constructor(name) {
        this.name = name;

        return 100;
    }
}

const you = new Person1('Lee');
console.log(you);