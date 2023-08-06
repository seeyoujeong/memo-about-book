import fetch from "node-fetch";

const foo = async () => {
    try {
        const wrongUrl = 'https://wrong.url';

        const response = await fetch(wrongUrl);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

foo();

const boo = async () => {
    const wrongUrl = 'https://wrong.url';

    const response = await fetch(wrongUrl);
    const data = await response.json();
    return data;
};

boo().then(console.log)
     .catch(console.error);