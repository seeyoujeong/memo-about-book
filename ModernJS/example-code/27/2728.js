// array-like object
console.log(Array.from({ length: 2, 0: 'a', 1: 'b'}));

console.log(Array.from('Hello'));

console.log(Array.from({ length: 3 }));

console.log(Array.from({ length: 3 }, (_, i) => i));

console.log(Array.from({ length: 3, 0: 1, 1: 2, 2: 3 }, (j, i) => j + i));

const arrayLike = {
    '0': 'apple',
    '1': 'banana',
    '2': 'orange',
    length: 3
};

for (let i = 0; i < arrayLike.length; i++) {
    console.log(arrayLike[i]);
}