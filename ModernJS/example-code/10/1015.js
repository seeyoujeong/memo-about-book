var person = {
    'last-name': 'Lee',
    1: 10
};

// person.'last-name'; // SyntaxError
// person.last-name; // 브라우저: NaN, Node.js: ReferenceError
// person[last-name]; // ReferenceError
console.log(person['last-name']);

// person.1; // SyntaxError
// person.'1'; // SyntaxError
console.log(person[1]); // person[1] -> person['1']
console.log(person['1']);