var x = 10;

function foo () {
    y = 20;
}
foo();

console.log(x + y);

// console.log(z); // Error

function zoo() {
    z = 30;
}
zoo();

delete x;
delete y;

console.log(x);
// console.log(y); // Error