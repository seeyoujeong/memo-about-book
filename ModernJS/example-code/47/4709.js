try {
    new Error('something wrong'); // 에러 객체를 생성했다고 에러 발생X
} catch (error) {
    console.log(error);
}

try {
    throw new Error('something wrong');
} catch (error) {
    console.log(error);
}

const repeat = (n, f) => {
    if (typeof f !== 'function') throw new TypeError('f must be a function');

    for (var i = 0; i < n; i++) {
        f(i);
    }
};

try {
    repeat(2, 1);
} catch (err) {
    console.error(err);
}

const foo = () => {
    throw Error('foo에서 발생한 에러');
};

const bar = () => {
    foo();
};

const baz = () => {
    bar();
};

try {
    baz();
} catch (err) {
    console.error(err);
}