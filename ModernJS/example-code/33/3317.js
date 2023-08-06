const iterable = {
    [Symbol.iterator]() {
        let cur = 1;
        const max = 5;
        return {
            next() {
                return { value: cur++, done: cur > max + 1 };
            }
        };
    }
};

for (const num of iterable) {
    console.log(num);
}