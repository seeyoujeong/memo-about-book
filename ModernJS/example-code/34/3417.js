const fibonacciFunc = function (max) {
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() { return this; },
        next() {
            [pre, cur] = [cur, pre + cur];
            return { value: cur, done: cur >= max };
        }
    };
};

let iter = fibonacciFunc(10);

for (const num of iter) {
    console.log(num);
}

iter = fibonacciFunc(10);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());