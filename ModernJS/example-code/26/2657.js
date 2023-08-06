function sum1(x, y) {
    return x + y;
}

console.log(sum1(1));

function sum2(x, y) {
    x = x || 0;
    y = y || 0;

    return x + y;
}

console.log(sum2(1, 2));
console.log(sum2(1));

function sum3(x = 0, y = 0) {
    return x + y;
}

console.log(sum3(1, 2));
console.log(sum3(1));

function logName(name = 'Lee') {
    console.log(name);
}

logName();
logName(undefined);
logName(null);

// function foo(...rest = []) { // Error -> Rest파라미터에는 기본값 지정 불가
//     console.log(rest);
// }

function sum4(x, y = 0) {
    console.log(arguments);
}

console.log(sum4.length);

sum4(1);
sum4(1, 2);