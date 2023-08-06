let strObj = new String();
console.log(strObj);

strObj = new String('Lee');
console.log(strObj);
console.log(strObj[0]);

strObj[0] = 'S'; // 문자열은 원시 값이므로 변경불가
console.log(strObj);

strObj = new String(123);
console.log(strObj);

strObj = new String(null);
console.log(strObj);

console.log('Hello'.length);

console.log(Object.getOwnPropertyDescriptors(strObj));