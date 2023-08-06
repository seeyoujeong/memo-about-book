function foo(...rest) {
    console.log(rest);
}

foo(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
    console.log('param1 :', param1);
    console.log('param2 :', param2);
    console.log('rest :', rest);
}

bar(1, 2, 3, 4, 5);

// function doo(...rest, param1, para2) {} // Error -> Rest파라미터는 마지막에

// function boo(...rest1, ...rest2) {} // Error -> Rest파라미터는 하나만 선언 가능

function zoo(...rest) {}
console.log(zoo.length);

function yoo(x, ...rest) {}
console.log(yoo.length);

function xoo(x, y, ...rest) {}
console.log(xoo.length);