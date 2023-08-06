const obj = {
    2: 2,
    3: 3,
    1: 1,
    b: 'b',
    a: 'a'
};

for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    console.log(key + ': ' + obj[key]);
}

const arr = [1, 2, 3];
arr.x = 10;

for (const i in arr) {
    console.log(arr[i]);
};

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(v => console.log(v));

for (const value of arr) {
    console.log(value);
}