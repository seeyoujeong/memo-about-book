const iterable = [1, 2, 3];

const iterator = iterable[Symbol.iterator]();

for (;;) {
    const res = iterator.next();

    if (res.done) break;

    const item = res.value;
    console.log(item);
}

const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};

for (let i = 0; i < arrayLike.length; i++) {
    console.log(arrayLike[i]);
}

// for (const item of arrayLike) {
//     console.log(item);
// }

const arr = Array.from(arrayLike); // 유사 배열 객체 또는 이터러블을 배열로 변환
console.log(arr);