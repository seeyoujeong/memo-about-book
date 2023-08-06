const users = [
    { id: 1, name: 'Lee' },
    { id: 2, name: 'Kim' },
    { id: 2, name: 'Choi' },
    { id: 3, name: 'Park' }
];

console.log(users.find(user => user.id === 2));

console.log([1, 2, 2, 3].filter(item => item === 2));
console.log([1, 2, 2, 3].find(item => item === 2));

console.log(users.findIndex(user => user.id === 2));
console.log(users.findIndex(user => user.name === 'Park'));

function predicate(key, value) {
    return item => item[key] === value;
}

console.log(users.findIndex(predicate('id', 2)));

console.log(users.findIndex(predicate('name', 'Park')));