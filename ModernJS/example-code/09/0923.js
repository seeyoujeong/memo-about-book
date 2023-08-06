var elem = null; // or undefined
// var value = elem.value; // Error

var value = elem && elem.value;

console.log(value);

function getStringLenght(str) {
    str = str || '';
    return str.length;
}

console.log(getStringLenght());
console.log(getStringLenght('hi'));

function getStringLenght(str = '') {
    return str.length;
}

console.log(getStringLenght());
console.log(getStringLenght('hi'));