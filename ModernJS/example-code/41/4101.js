const timerId = setTimeout(() => console.log('Hi!'), 1000);

setTimeout(name => console.log(`Hi! ${name}.`), 1000, 'Lee');

setTimeout(() => console.log('Hello!'));

clearTimeout(timerId);

let count = 1;

const timeoutId = setInterval(() => {
    console.log(count);

    if (count++ === 5) clearInterval(timeoutId);
}, 1000);