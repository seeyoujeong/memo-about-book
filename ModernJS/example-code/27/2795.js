const numbers = [1, 2, 3];
let pows = [];

for (let i = 0; i < numbers.length; i++) {
    pows.push(numbers[i] ** 2);
}

console.log(pows);

pows = [];

numbers.forEach(item => pows.push(item ** 2));
console.log(pows);

[1, 2, 3].forEach((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
});

console.log(numbers);
numbers.forEach((item, index, arr) => { arr[index] = item ** 2; });
console.log(numbers);

const result = [1, 2, 3].forEach(console.log);
console.log(result);