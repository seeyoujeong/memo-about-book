function sum() {
    return [...arguments].reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3));

const sum1 = (...args) => args.reduce((pre, cur) => pre + cur, 0);

console.log(sum1(1, 2, 3));

const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};

// const arr = [...arrayLike]; // Error

console.log(Array.from(arrayLike));