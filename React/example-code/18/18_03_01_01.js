const addOne = x => x + 1;
addOne(1);

function addOneThunk(x) {
    const thunk = () => addOne(x);
    return thunk;
}

// const addOneThunk = x => () => addOne(x);

const fn = addOneThunk(1);
setTimeout(() => {
    const value = fn();
    console.log(value);
}, 1000);