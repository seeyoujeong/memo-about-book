var person = {
    firstName: 'Ung-mo',
    'last-name': 'Lee'
};

console.log(person);

var obj = {};
var key = 'hello';

obj[key] = 'world'; // ES5
// var obj = { [key]: 'world' }; // ES6

console.log(obj);

var foo = {
    '': ''
};

console.log(foo);

foo = {
    0: 1, // 프로퍼티 키는 내부적으로 문자열로 변환
    1: 2,
    2: 3
};

console.log(foo);

foo = {
    var: '', // 예약어를 사용해도 에러 X
    function: ''
};

console.log(foo);

foo = {
    name: 'Lee',
    name: 'Kim'
};

console.log(foo);