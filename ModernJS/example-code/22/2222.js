function getThisBinding() {
    return this;
}

const thisArg = { a: 1 };

console.log(getThisBinding.bind(thisArg));

console.log(getThisBinding.bind(thisArg)());

const person = {
    name: 'Lee',
    foo(callback) {
        setTimeout(callback.bind(this), 100);
    }
};

person.foo(function () {
    console.log(`Hi! my name is ${this.name}.`);
});