let str = 'Hello';

for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}

console.log(str.charAt(5)); // 문자열의 범위를 벗어난 정수인 경우 빈 문자열 반환

str = 'Hello World';

console.log(str.substring(1, 4));
console.log(str.substring(1));

console.log(str.substring(4, 1));
console.log(str.substring(-2));

console.log(str.substring(1, 100)); // 인수 > 문자열의 길이인 경우 인수는 문자열 길이로 취급
console.log(str.substring(20));

console.log(str.substring(0, str.indexOf(' ')));
console.log(str.substring(str.indexOf(' ') + 1, str.length));

console.log(str.slice(0, 5));
console.log(str.slice(2));
console.log(str.slice(-5));

console.log(str.toUpperCase());
console.log(str.toLowerCase());