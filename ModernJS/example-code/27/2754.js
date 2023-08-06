const arr = [1, 2];

let result = arr.shift();
console.log(result);

console.log(arr);

const Queue = (function () {
    function Queue(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array.`);
        }
        this.array = array;
    }

    Queue.prototype = {
        constructor: Queue,

        enqueue(value) {
            return this.array.push(value);
        },

        dequeue() {
            return this.array.shift();
        },

        entries() {
            return [...this.array];
        }
    };

    return Queue;
}());

const queue = new Queue([1, 2]);
console.log(queue.entries());

queue.enqueue(3);
console.log(queue.entries());

queue.dequeue();
console.log(queue.entries());

// class Queue {
//     #array;

//     constructor(array = []) {
//         if (!Array.isArray(array)) {
//             throw new TypeError(`${array} is not an array.`);
//         }
//         this.#array = array;
//     }

//     enqueue(value) {
//         return this.#array.push(value);
//     }

//     dequeue() {
//         return this.#array.shift();
//     }

//     entries() {
//         return [...this.#array];
//     }
// }