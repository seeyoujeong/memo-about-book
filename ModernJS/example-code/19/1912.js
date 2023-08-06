const Person = name => {
    this.name = name;
};

console.log(Person.hasOwnProperty('prototype'));

console.log(Person.prototype);

const obj = {
    foo() {}
};

console.log(obj.foo.hasOwnProperty('prototype'));

console.log(obj.foo.prototype);