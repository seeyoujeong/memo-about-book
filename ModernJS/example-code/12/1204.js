function add(x, y) {
    return x + y;
}

console.dir(add);

console.log(add(2, 5));

function foo() { console.log('foo'); }
foo();

(function bar() { console.log('bar'); });
// bar(); // Error