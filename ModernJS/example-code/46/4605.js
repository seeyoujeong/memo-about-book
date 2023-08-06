function* genFunc() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = genFunc();

console.log(Symbol.iterator in generator);
console.log('next' in generator);

function* genFunc1() {
    try {
        yield 1;
        yield 2;
        yield 3;
    } catch (e) {
        console.error(e);
    }
}

const generator1 = genFunc();

console.log(generator1.next());
console.log(generator1.return('End!'));
console.log(generator1.throw('Error!'));