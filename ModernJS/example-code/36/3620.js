const todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'JS', completed: false }
];

const [, { id }] = todos;
console.log(id);

const user = {
    name: 'Lee',
    address: {
        zipCode: '03068',
        city: 'Seoul'
    }
};

const { address: { city } } = user;
console.log(city);

// Rest 프로퍼티
const { x, ...rest } = { x: 1, y: 2, z: 3 };
console.log(x, rest);