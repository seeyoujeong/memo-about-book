const fibonacciFunc = function (max) {
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() {
            return {
                next() {
                    [pre, cur] = [cur, pre + cur];
                    return { value: cur, done: cur >= max };
                }
            };
        }
    };
};

for (const num of fibonacciFunc(10)) {
    console.log(num);
}

const iterable = fibonacciFunc(5);

const iterator = iterable[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());