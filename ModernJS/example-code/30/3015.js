console.log(new Date('2020/07/24').getDay());

console.log(new Date('2020/07/24/12:00').getHours());

const today = new Date();

today.setHours(7);
console.log(today.getHours());

today.setHours(0, 0, 0, 0);
console.log(today);

console.log(new Date('2020/07/24/12:30').getMinutes());

today.setMinutes(50);
console.log(today.getMinutes());

today.setMinutes(5, 10, 999);
console.log(today);

console.log(new Date('2020/07/24/12:30:10').getSeconds());

today.setSeconds(30);
console.log(today.getSeconds());

today.setSeconds(10, 0);
console.log(today);

console.log(new Date('2020/07/24/12:30:10:150').getMilliseconds());

today.setMilliseconds(123);
console.log(today.getMilliseconds());