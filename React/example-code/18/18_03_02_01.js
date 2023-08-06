function* generatorFunction() {
    console.log('안녕하세요');
    yield 1;
    console.log('제너레이터 함수');
    yield 2;
    console.log('function*');
    yield 3;
    return 4;
}

const generator = generatorFunction();

generator.next();
generator.next();
generator.next();
console.log(generator.next());

function* sumGenerator() {
    console.log('sumGenerator가 만들어졌습니다.');
    let a = yield;
    let b = yield;
    yield a + b;
}

const sum = sumGenerator();
sum.next();
console.log(sum.next(1));
console.log(sum.next(2));
console.log(sum.next());

function* watchGenerator() {
    console.log('모니터링 중...');
    let prevAction = null;
    while(true) {
        const action = yield;
        console.log('이전 액션: ', prevAction);
        prevAction = action;
        if (action.type === 'HELLO') {
            console.log('안녕하세요!');
        }
    }
}

const watch = watchGenerator();

watch.next();
watch.next({ type: 'TEST' });
watch.next({ type: 'HELLO'});