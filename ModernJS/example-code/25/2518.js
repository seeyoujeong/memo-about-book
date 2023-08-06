class Perosn {
    constructor() {
        this.name = 'Lee';
        this.address = 'Seoul';
    }
}

const me = new Perosn();
console.log(me);

class Person1 {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

const you = new Person1('Lee', 'Seoul');
console.log(you);