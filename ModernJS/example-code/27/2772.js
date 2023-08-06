function sum() {
    var arr = Array.prototype.slice.call(arguments);
    console.log(arr);

    return arr.reduce(function (pre, cur) {
        return pre + cur;
    }, 0);
}

console.log(sum(1, 2, 3));

function sum1() {
    const arr = Array.from(arguments);
    console.log(arr);

    return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum1(1, 2, 3));

function sum2() {
    const arr = [...arguments];
    console.log(arr);

    return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum2(1, 2, 3));