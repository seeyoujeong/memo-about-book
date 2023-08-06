const x = 1;

function foo() {
    eval('var x = 2;');
    console.log(x);
}

foo();
console.log(x);

function soo() {
    'use strict';

    eval('var x = 2; console.log(x);');
    console.log(x);
}

soo();
console.log(x);

function doo() {
    eval('var x = 2; console.log(x);');
    eval('const x = 3; console.log(x);');
    console.log(x);
}

doo();
console.log(x);