const person = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: { age: 20 }
};

for (const key in person) {
    console.log(key + ': ' + person[key]);
}

const sym = Symbol();
const obj = {
    a: 1,
    [sym]: 10
};

for (const key in obj) {
    console.log(key + ': ' + obj[key]);
}

for (const key in person) {
    if (!person.hasOwnProperty(key)) continue;
    console.log(key + ': ' + person[key]);
}