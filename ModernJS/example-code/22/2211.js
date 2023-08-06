var value = 1;

const obj = {
    value: 100,
    foo() {
        const that = this;

        setTimeout(function () {
            console.log(that.value);
        }, 100);
    }
};

obj.foo();

const obj1 = {
    value: 200,
    foo() {
        setTimeout(function () {
            console.log(this.value);
        }.bind(this), 100);
    }
};

obj1.foo();

const obj2 = {
    value: 300,
    foo() {
        setTimeout(() => console.log(this.value), 100);
    }
};

obj2.foo();