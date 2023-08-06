const x = 1;

function outerFunc() {
    const x = 10;
    innerFunc();
}

function innerFunc() {
    console.log(x);
}

outerFunc();