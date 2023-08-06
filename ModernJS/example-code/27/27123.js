const sum = [1, 2, 3, 4].reduce((acc, cur) => acc + cur);
console.log(sum);

// const sum1 = [].reduce((acc, cur) => acc + cur); // Error 빈 배열로 호출하면 에러

const sum1 = [].reduce((acc, cur) => acc + cur, 0);
console.log(sum1);

const products = [
    { id: 1, price: 100 },
    { id: 2, price: 200 },
    { id: 3, price: 300 }
];

const priceSum = products.reduce((acc, cur) => acc.price + cur.price);
console.log(priceSum);

const priceSum1 = products.reduce((acc, cur) => acc + cur.price, 0);
console.log(priceSum1);