function getThisBinding() {
    console.log(arguments);
    return this;
}

const thisArg = { a: 1 };

console.log(getThisBinding.apply(thisArg, [1, 2, 3]));

console.log(getThisBinding.call(thisArg, 1, 2, 3));

function convertArgsToArray() {
    console.log(arguments);

    const arr = Array.prototype.slice.call(arguments);
    console.log(arr);

    return arr;
}

convertArgsToArray(1, 2, 3);