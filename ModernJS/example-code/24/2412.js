const counter = (function () {
    let num = 0;

    return {
        increase() {
            return ++num;
        },
        decrease() {
            return num > 0 ? --num: 0;
        }
    };
}());

console.log(counter.increase());
console.log(counter.increase());

console.log(counter.decrease());
console.log(counter.decrease());