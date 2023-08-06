import fetch from "node-fetch";

const async = generatorFunc => {
    const generator = generatorFunc();

    const onResolved = arg => {
        const result = generator.next(arg);

        return result.done
            ? result.value
            : result.value.then(res => onResolved(res));
    };

    return onResolved;
};

(async(function* fetchTodo() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    const response = yield fetch(url);
    const todo = yield response.json();
    console.log(todo);
})());

// 제너레이터 실행기가 필요하다면
import co from "co";

co(function* fetchTodo() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    const response = yield fetch(url);
    const todo = yield response.json();
    console.log(todo); 
});