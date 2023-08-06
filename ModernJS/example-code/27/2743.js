const arr = [1, 2, 2, 3];

console.log(arr.indexOf(2));
console.log(arr.indexOf(4));
console.log(arr.indexOf(2, 2)); // 두 번째 인수는 검색을 시작할 인덱스

const foods = ['apple', 'banana', 'orange'];

if (foods.indexOf('orange') === -1) {
    foods.push('orange');
}

console.log(foods);

if (!foods.includes('orange')) {
    foods.push('orange');
}

console.log(foods);