function foo() {
    var x = 'local';
    console.log(x);
    return x;
}

foo();
// console.log(x); // Error

var x = 'global';

function foo1() {
    console.log(x);
    var x = 'local';
}

foo1();
console.log(x);