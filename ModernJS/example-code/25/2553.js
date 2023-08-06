class MyMath {
    static PI = 22 / 7;

    static #num = 10;

    static increment() {
        return ++MyMath.#num;
    }
}

console.log(MyMath.PI);
console.log(MyMath.increment());