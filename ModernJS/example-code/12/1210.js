var add = function (x, y) {
    return x + y;
};

console.log(add(2, 5));

add = function foo(x, y) {
    return x + y;
};

console.log(add(2, 5));

// console.log(foo(2, 5)); // Error