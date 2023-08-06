import fetch from "node-fetch";

const getGithubUserName = async id => {
    const res = await fetch(`https://api.github.com/users/${id}`);
    const { name } = await res.json();
    console.log(name);
};

getGithubUserName('ungmo2');

async function foo() {
    const a = await new Promise(resolve => setTimeout(() => resolve(1), 3000));
    const b = await new Promise(resolve => setTimeout(() => resolve(2), 2000));
    const c = await new Promise(resolve => setTimeout(() => resolve(3), 1000));

    console.log([a, b, c]);

    const res = await Promise.all([
        new Promise(resolve => setTimeout(() => resolve(1), 3000)),
        new Promise(resolve => setTimeout(() => resolve(2), 2000)),
        new Promise(resolve => setTimeout(() => resolve(3), 1000))
    ]);

    console.log(res);
}

foo();

async function bar(n) {
    const a = await new Promise(resolve => setTimeout(() => resolve(n), 3000));
    const b = await new Promise(resolve => setTimeout(() => resolve(a + 1), 2000));
    const c = await new Promise(resolve => setTimeout(() => resolve(b + 1), 1000));

    console.log([a, b, c]);
}

bar(1);