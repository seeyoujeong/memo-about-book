function foo() {}
const bar = function () {};

const baz = {
    x: function () {}
};

console.log(new foo());
console.log(new bar());
console.log(new baz.x());

const arrow = () => {};

const obj = {
    x() {}
};

// console.log(new arrow()); // TypeError
// console.log(new obj.x()); // TypeError