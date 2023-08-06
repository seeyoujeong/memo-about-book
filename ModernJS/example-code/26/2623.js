const Foo = () => {};

// new Foo(); // Error

console.log(Foo.hasOwnProperty('prototype'));

// const arrow = (a, a) => a + a; // Error