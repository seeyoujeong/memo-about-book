let target = 'Is this all there is?';

let regExp = /.../g;

console.log(target.match(regExp));

target = 'A AA B BB Aa Bb AAA';

regExp = /A{1,2}/g;

console.log(target.match(regExp));

regExp = /A{2}/g;

console.log(target.match(regExp));

regExp = /A{2,}/g;

console.log(target.match(regExp));

regExp = /A+/g;

console.log(target.match(regExp));

target = 'color colour colouur';

regExp = /colou?r/g;

console.log(target.match(regExp));