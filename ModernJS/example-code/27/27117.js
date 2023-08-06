const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];

const count = fruits.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {});

console.log(count);

const values = [1, [2, 3], 4, [5, 6]];

const flatten = values.reduce((acc, cur) => acc.concat(cur), []);

console.log(flatten);

console.log([1, [2, 3, 4, 5]].flat());
console.log([1, [2, 3, [4, 5]]].flat(2));