function isFalsy(v) {
    return !v;
}

function isTruthy(v) {
    return !!v;
}

console.log(isFalsy(false));
console.log(isFalsy(undefined));
console.log(isFalsy(null));
console.log(isFalsy(0));
console.log(isFalsy(NaN));
console.log(isFalsy(''));

console.log(isTruthy(true));
console.log(isTruthy('0'));
console.log(isTruthy({}));
console.log(isTruthy([]));