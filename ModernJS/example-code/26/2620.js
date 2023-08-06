const sum = (a, b) => {
    const result = a + b;
    return result;
};

console.log(sum(1, 2));

const person = (name => ({
    sayHi() { return `Hi? My name is ${name}.`; }
}))('Lee'); // 화살표 함수 자체의 파싱이 특별하게 취급 되기 때문에 이렇게 사용해야함

console.log(person.sayHi());

console.log([1, 2, 3].map(v => v * 2));