const points = [40, 100, 1, 5, 2, 25, 10];

points.sort();
console.log(points);

points.sort((a, b) => a - b);
console.log(points);

console.log(points[0], points[points.length - 1]);

points.sort((a, b) => b - a);
console.log(points);

console.log(points[points.length - 1], points[0]);

const todos = [
    { id: 4, content: 'JavaScript' },
    { id: 1, content: 'HTML' },
    { id: 2, content: 'CSS' }
];

function compare(key) {
    return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
}

todos.sort(compare('id'));
console.log(todos);

todos.sort(compare('content'));
console.log(todos);

console.log(compare('id'));