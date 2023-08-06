// ES5
var obj = {
    name: 'Lee',
    sayHi: function() {
        console.log('Hi! ' + this.name);
    }
};

obj.sayHi();

// ES6
const obj1 = {
    name: 'Lee',
    sayHi() {
        console.log('Hi! ' + this.name);
    }
};

obj.sayHi();