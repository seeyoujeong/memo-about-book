function multiply(x, y) {
    return x * y;
    console.log('실행되지 않는다.');
}

console.log(multiply(3, 5));

function foo () {
    return;
}

console.log(foo());

function add(x, y) {
    return // ASI에 의해 세미콜론이 추가
    x + y;
}

console.log(add(3, 5));