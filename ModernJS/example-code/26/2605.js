const obj = {
    x: 1,
    // foo는 메서드
    foo() { return this.x; },
    // bar는 일반 함수
    bar: function() { return this.x; }
};

console.log(obj.foo());
console.log(obj.bar());

// console.log(new obj.foo()); // Error
console.log(new obj.bar());

console.log(obj.foo.hasOwnProperty('prototype'));
console.log(obj.bar.hasOwnProperty('prototype'));

// 표준 빌드인 객체가 제공하는 프로토타입 메서드와 정적 메서드는 모두 non-constructor
console.log(String.prototype.toUpperCase.prototype);
console.log(String.fromCharCode.prototype);

console.log(Number.prototype.toFixed.prototype);
console.log(Number.isFinite.prototype);

console.log(Array.prototype.map.prototype);
console.log(Array.from.prototype);