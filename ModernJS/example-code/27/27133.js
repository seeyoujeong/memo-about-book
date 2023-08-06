const arr = ['hello', 'world'];

console.log(arr.map(x => x.split('')).flat());

console.log(arr.flatMap(x => x.split('')));

console.log(arr.flatMap((str, index) => [index, [str, str.length]]));

console.log(arr.map((str, index) => [index, [str, str.length]]).flat(2));