(function () {
    const foo = () => console.log(arguments);
    foo(3, 4);
}(1, 2))

const foo = () => console.log(arguments);
foo(1, 2);