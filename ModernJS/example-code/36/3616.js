const { firstName = 'Ungmo', lastName } = { lastName: 'Lee' };
console.log(firstName, lastName);

const { firstName: fn = 'Ungmo', lastName: ln } = { lastName: 'Lee' };
console.log(fn, ln);

const str = 'Hello';

const { length } = str;
console.log(length);

const todo = { id: 1, content: 'HTML', completed: true };

const { id } = todo;
console.log(id);

function printTodo(todo) {
    console.log(`할일 ${todo.content}은 ${todo.completed ? '완료' : '비완료'} 상태입니다.`);
}

printTodo({ id: 1, content: 'HTML', completed: true });

function printTodo1({ content, completed }) {
    console.log(`할일 ${content}은 ${completed ? '완료' : '비완료'} 상태입니다.`);
}

printTodo1({ id: 1, content: 'HTML', completed: true });