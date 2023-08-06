class Numbers {
    numberArray = [];

    multiply(arr) {
        arr.forEach(function (item) {
            this.numberArray.push(item * item);
        }, this);

        // arr.forEach(item => this.numberArray.push(item * item));
    }
}

const numbers = new Numbers();
numbers.multiply([1, 2, 3]);
console.log(numbers.numberArray);

// 폴리필
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        thisArg = thisArg || globalThis;

        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}