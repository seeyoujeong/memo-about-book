import fetch from "node-fetch"

async function fetchTodo() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    const response = await fetch(url);
    const todo = await response.json();
    console.log(todo);
}

fetchTodo();

async function foo(n) { return n; }
foo(1).then(v => console.log(v));

const bar = async function (n) { return n; };
bar(2).then(v => console.log(v));

const baz = async n => n;
baz(3).then(v => console.log(v));

const obj = {
    async foo(n) { return n; }
};
obj.foo(4).then(v => console.log(v));

class MyClass {
    // async constructor() { }
    async bar(n) { return n; }
}
const myClass = new MyClass();
myClass.bar(5).then(v => console.log(v));