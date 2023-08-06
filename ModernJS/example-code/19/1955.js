const myProto = { x: 10 };

const obj = {
    y: 20,

    // obj -> myProto -> Object.prototype -> null
    __proto__: myProto
};

console.log(obj.x, obj.y);
console.log(Object.getPrototypeOf(obj) === myProto);