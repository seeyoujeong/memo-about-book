// ES5
let origin = [1, 2];
let copy = origin.slice();

console.log(copy);
console.log(copy === origin);

// ES6
origin = [1, 2];
copy = [...origin];

console.log(copy);
console.log(copy === origin);

// ES5
function sum() {
    var args = Array.prototype.slice.call(arguments);

    return args.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(sum(1, 2, 3));

const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};

const arr = Array.prototype.slice.call(arrayLike);
console.log(Array.isArray(arr));