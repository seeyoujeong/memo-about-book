const numbers = [1, 4, 9];

const roots = numbers.map(item => Math.sqrt(item));
// const roots = numbers.map(Math.sqrt); 위와 동일

console.log(roots);
console.log(numbers);

[1, 2, 3].map((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
    return item;
});