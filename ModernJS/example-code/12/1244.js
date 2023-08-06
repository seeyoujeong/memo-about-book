function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1);
}

countdown(10)

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));

var factorial = function foo(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
    // return n * foo(n -1);
}

console.log(factorial(5));