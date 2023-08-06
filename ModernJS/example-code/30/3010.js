const today = new Date();

today.setFullYear(2000);
console.log(today.getFullYear());

today.setFullYear(1900, 0, 1);
console.log(today);

console.log(new Date('2020/07/24').getMonth());

today.setMonth(0);
console.log(today.getMonth());

today.setMonth(11, 1);
console.log(today);

console.log(new Date('2020/07/24').getDate());

today.setDate(1);
console.log(today.getDate());