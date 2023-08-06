const target = 'Is this all there is?';
let regExp = /is/;

console.log(regExp.exec(target));
console.log(regExp.test(target));
console.log(target.match(regExp));

regExp = /is/g;

console.log(regExp.exec(target));
console.log(regExp.test(target));
console.log(target.match(regExp));

// 플래그
// i : 대소문자 구별X
// g : 모든 문자열을 전역 검색
// m : 문자열의 행이 바뀌더라도 검색
console.log(target.match(/is/));
console.log(target.match(/is/i));
console.log(target.match(/is/g));
console.log(target.match(/is/ig));