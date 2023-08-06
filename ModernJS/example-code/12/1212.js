console.dir(add);
console.dir(sub);

console.log(add(2, 5));
// console.log(sub(2, 5)); // Error

function add(x, y) {
    return x + y;
}

var sub = function (x, y) {
    return x - y;
};