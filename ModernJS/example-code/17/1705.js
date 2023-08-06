function foo() {
    console.log(this);
}

foo();

const obj = { foo };

obj.foo();

const inst = new foo();