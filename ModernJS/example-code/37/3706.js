const set = new Set();
console.log(set);

set.add(1);
console.log(set);

set.add(2).add(3);
console.log(set);

set.add(4).add(4); // ignore
console.log(set);

console.log(NaN === NaN);
console.log(0 === -0);

set.add(NaN).add(NaN); // 같다고 평가
console.log(set);

set.add(0).add(-0); // 같다고 평가
console.log(set);

const set1 = new Set();
set1
    .add(1)
    .add('a')
    .add(true)
    .add(undefined)
    .add(null)
    .add({})
    .add([])
    .add(() => {});

console.log(set1);