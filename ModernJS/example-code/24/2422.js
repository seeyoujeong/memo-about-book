const funcs = [];

for (let i = 0; i < 3; i++) {
    funcs[i] = function () { return i; };
}

for (let i = 0; i < funcs.length; i++) {
    console.log(funcs[i]());
}

const funcs1 = Array.from(new Array(3), (_, i) => () => i);

funcs1.forEach(f => console.log(f()));