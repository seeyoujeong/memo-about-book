class Base {
    // constructor() {} 암묵적으로 선언
}

class Derived extends Base {
    // constructor(...args) { super(...args); } 암묵적으로 선언
}

const derived = new Derived();
console.log(derived);