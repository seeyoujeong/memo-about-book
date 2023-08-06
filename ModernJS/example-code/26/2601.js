var foo = function () {
    return 1;
};

console.log(foo());

console.log(new foo());

var obj = { foo: foo };
console.log(obj.foo());

var obj1 = {
    x: 10,
    f: function () { return this.x; }
};

console.log(obj1.f());

var bar = obj1.f;
console.log(bar());

console.log(new obj1.f());

console.log([1, 2, 3].map(function (item) {
    return item * 2;
}));