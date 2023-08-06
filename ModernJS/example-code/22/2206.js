const foo = function () {
    console.dir(this);
};

foo();

const obj = { foo };
obj.foo();

new foo();

const bar = { name: 'bar' };

foo.call(bar);
foo.apply(bar);
foo.bind(bar)();