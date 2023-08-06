function Base(a) {
    this.a = a;
}

class Derived extends Base {}

const derived = new Derived(1);
console.log(derived);

function Base1() {}

class Base2 {}

let condition = true;

class Derived1 extends (condition ? Base1 : Base2) {}

const derived1 = new Derived1();
console.log(derived1);

console.log(derived1 instanceof Base1);
console.log(derived1 instanceof Base2);