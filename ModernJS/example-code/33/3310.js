const Direction = {
    UP: Symbol('up'),
    DOWN: Symbol('down'),
    LEFT: Symbol('left'),
    RIGHT: Symbol('right')
};

// const Direction = Object.freeze({
//     UP: Symbol('up'),
//     DOWN: Symbol('down'),
//     LEFT: Symbol('left'),
//     RIGHT: Symbol('right')
// });

const myDirection = Direction.UP;

if (myDirection === Direction.UP) {
    console.log('You are going UP.');
}