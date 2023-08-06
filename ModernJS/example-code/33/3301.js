const mySymbol = Symbol();
console.log(typeof mySymbol);

console.log(mySymbol);

// new Symbol(); // Error

const mySymbol1 = Symbol('mySymbol'); // 인수는 설명
const mySymbol2 = Symbol('mySymbol');

console.log(mySymbol1 === mySymbol2);

console.log(mySymbol1.description); // 래퍼 객체 생성
console.log(mySymbol1.toString());

// console.log(mySymbol + ''); // Error 암묵적으로 변환불가
// console.log(+mySymbol); // Error 암묵적으로 변환불가

console.log(!!mySymbol);

if (mySymbol) console.log('mySymbol is not empty.');