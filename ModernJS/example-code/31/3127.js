let target = 'AA BB 12 Aa Bb';

let regExp = /[^0-9]+/g; // [...] 내의 ^은 not의 의미

console.log(target.match(regExp));

target = 'https://poiemaweb.com';

regExp = /^https/; // [...] 밖의 ^은 문자열의 시작을 의미

console.log(regExp.test(target));

regExp = /com$/; // 문자열의 마지막을 의미

console.log(regExp.test(target));