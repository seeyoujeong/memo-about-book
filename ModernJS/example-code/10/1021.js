// ES5
var prefix = 'prop';
var i = 0;

var obj = {};

obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj);

// ES6
const prefix1 = 'prop';
let j = 0;

const obj1 = {
    [`${prefix1}-${++j}`]: j,
    [`${prefix1}-${++j}`]: j,
    [`${prefix1}-${++j}`]: j
};

console.log(obj1)