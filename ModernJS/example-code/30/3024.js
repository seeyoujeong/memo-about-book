console.log(new Date('2020/07/24/12:30').getTime());

const today = new Date();

today.setTime(86400000);
console.log(today);

console.log(today.getTimezoneOffset() / 60); // UTC와 locale time과의 차이를 분 단위로

console.log(today.toString());
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toISOString());

console.log(today.toISOString().slice(0, 10));
console.log(today.toISOString().slice(0, 10).replace(/-/g, ''));

console.log(today.toLocaleString());
console.log(today.toLocaleString('ko-KR'));
console.log(today.toLocaleString('en-US'));
console.log(today.toLocaleString('ja-JP'));

console.log(today.toLocaleTimeString());
console.log(today.toLocaleTimeString('ko-KR'));
console.log(today.toLocaleTimeString('en-US'));
console.log(today.toLocaleTimeString('ja-JP'));