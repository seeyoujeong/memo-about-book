const arr = [1, 2];

let result = arr.pop();
console.log(result);

console.log(arr);

const Stack = (function () {
    function Stack(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array.`);
        }
        this.array = array;
    }

    Stack.prototype = {
        constructor: Stack,

        push(value) {
            return this.array.push(value);
        },

        pop() {
            return this.array.pop();
        },

        entries() {
            return [...this.array];
        }
    };

    return Stack;
}());

const stack = new Stack([1, 2]);
console.log(stack.entries());

stack.push(3);
console.log(stack.entries());

stack.pop();
console.log(stack.entries());

// class Stack {
//     #array;

//     constructor(array = []) {
//         if (!Array.isArray(array)) {
//             throw new TypeError(`${array} is not an array.`);
//         }
//         this.#array = array;
//     }

//     push(value) {
//         return this.#array.push(value);
//     }

//     pop() {
//         return this.#array.pop();
//     }

//     entries() {
//         return [...this.#array];
//     }
// }