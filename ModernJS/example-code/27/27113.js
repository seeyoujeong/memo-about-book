const sum = [1, 2, 3, 4].reduce(
    (accumulator, currentValue, index, array) => accumulator + currentValue, 0
);

console.log(sum);

const values = [1, 2, 3, 4, 5, 6];

const average = values.reduce((acc, cur, i, { length }) => {
    return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);

console.log(average);

const max = values.reduce((acc, cur) => (acc > cur ? acc : cur), 0);

console.log(max);

const max1 = Math.max(...values);

console.log(max1);