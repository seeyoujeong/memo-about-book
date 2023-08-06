console.log([1, [2, 3, 4, 5]].flat()); // 기본값 1

console.log([1, [2, [3, [4]]]].flat());
console.log([1, [2, [3, [4]]]].flat(1));

console.log([1, [2, [3, [4]]]].flat(2));
console.log([1, [2, [3, [4]]]].flat().flat());

console.log([1, [2, [3, [4]]]].flat(Infinity));