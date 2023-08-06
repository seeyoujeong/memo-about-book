function foo() {}

foo.prop = 10;

foo.method = function () {
    console.log(this.prop);
};

foo.method();

console.log(foo()); // [[Call]]
console.log(new foo()); // [[Construct]]