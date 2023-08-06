console.log(new Date());
console.log(Date());

console.log(new Date(0));
console.log(new Date(86400000));

console.log(new Date('May 26, 2020 10:00:00'));
console.log(new Date('2020/03/26/10:00:00'));

console.log(new Date(2020, 2));
console.log(new Date(2020, 2, 26, 10, 00, 00, 0));

console.log(Date.now()); // 1970/01/01/00:00:00을 기점으로 경과한 밀리초

console.log(Date.parse('Jan 2, 1970 00:00:00 UTC'));
console.log(Date.parse('Jan 2, 1970 09:00:00'));
console.log(Date.parse('1970/01/02/09:00:00'));

console.log(Date.UTC(1970, 0, 2));
console.log(Date.UTC('1970/1/2'));

console.log(new Date('2020/07/24').getFullYear());