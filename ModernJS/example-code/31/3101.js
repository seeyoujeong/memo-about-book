const tel = '010-1234-567팔';

const regExp = /^\d{3}-\d{4}-\d{4}$/;

console.log(regExp.test(tel));

const target = 'Is this all there is?';

let regexp = /is/i;

console.log(regexp.test(target));

regexp = new RegExp(/is/i);
// regexp = new RegExp(/is/, 'i');
// regexp = new RegExp('is', 'i');

console.log(regexp.test(target));