function add(x, y) {
    return x + y;
}

console.log(add(2));
console.log(add('a', 'b'));
console.log(add(2, 5, 10));

function add1(x, y) {
    console.log(arguments);

    return x + y;
}

add1(2, 5, 10);