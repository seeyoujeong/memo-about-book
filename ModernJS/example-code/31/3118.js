let target = 'A AA B BB Aa Bb';

let regExp = /A|B/g;

console.log(target.match(regExp));

regExp = /A+|B+/g;

console.log(target.match(regExp));

regExp = /[AB]+/g;

console.log(target.match(regExp));

target = 'A AA BB ZZ Aa Bb';

regExp = /[A-Z]+/g;

console.log(target.match(regExp));

target = 'AA BB Aa Bb 12';

regExp = /[A-Za-z]+/g;

console.log(target.match(regExp));

target = 'AA BB 12,345';

regExp = /[0-9]+/g;

console.log(target.match(regExp));

regExp = /\d+/g;

console.log(target.match(regExp));

regExp = /[0-9,]+/g;

console.log(target.match(regExp));

regExp = /[\d,]+/g;

console.log(target.match(regExp));

regExp = /[\D,]+/g;

console.log(target.match(regExp));

target = 'Aa Bb 12,345 _$%&';

regExp = /[\w,]+/g;

console.log(target.match(regExp));

regExp = /[\W,]+/g;

console.log(target.match(regExp));