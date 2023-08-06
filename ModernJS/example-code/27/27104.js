[1, 2, 3].forEach(item => {
    console.log(item);
    // if (item > 1) break; // Error 사용불가
});

[1, 2, 3].forEach(item => {
    console.log(item);
    // if (item > 1) continue; // Error 사용불가
});

const arr = [1, , 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(v => console.log(v)); // 존재하지 않는 요소는 순회 대상에서 제외