const array = [1, 2, 3];

const iterator = array[Symbol.iterator]();

console.log('next' in iterator);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());