class Base {
    constructor() {
        // super(); // Error
    }
}

class Derived extends Base {
    constructor() {
        // this.a = 1; // super를 호출하기 전에는 this를 참조X
        super(); // 반드시 호출
    }
}

function Foo() {
    // super(); // Error
}

const derived = new Derived();