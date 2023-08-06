const todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
];

const _todos = todos.slice(); // = [...todos];

console.log(_todos === todos);

console.log(_todos[0] === todos[0]);