const person = {};

Object.defineProperties(person, {
    firstName: {
        value: 'Ungmo',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: 'Lee',
        writable: true,
        enumerable: true,
        configurable: true
    },

    fullName: {
        get() {
            retrun `${this.firstName} ${this.lastName}`;
        },
        set(name) {
            [thsi.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});

person.firstName = 'Heegun Lee';
console.log(person);