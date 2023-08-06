const set = new Set();
console.log(set);

const set1 = new Set([1, 2, 3, 3]);
console.log(set1);

const set2 = new Set('hello');
console.log(set2);

// const uniq = array => array.filter((v, i, self) => self.indexOf(v) === i);
// 배열 중복 요소 제거
const uniq = array => [...new Set(array)];
console.log(uniq([2, 1, 2, 3, 4, 3, 4]));

const { size } = new Set([1, 2, 3, 3]);
console.log(size);

const set3 = new Set([1, 2, 3]);

console.log(Object.getOwnPropertyDescriptor(Set.prototype, 'size'));

set3.size = 10; // ignore
console.log(set3.size);