console.log(() => this.x);
console.log((function () { return this.x; }).bind(this)); // 위와 동일하게 작동

(function () {
    const foo = () => console.log(this);
    foo();
}).call({ a: 1 });

(function () {
    const bar = () => () => console.log(this);
    foo();
}).call({ a: 1 });