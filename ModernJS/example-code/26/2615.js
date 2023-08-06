const power = x => x ** 2; // 값으로 평가될 수 있는 표현식이면 암묵적으로 반환
console.log(power(2));
// const power = x => { return x ** 2; }; // 위와 동일


const arrow = () => { const x = 1 }; // 중괄호를 생략하면 안됨


const create = (id, content) => ({ id, content });
console.log(create(1, 'JavaScript'));
// const create = (id, content) => { return { id, content }; }; // 위와 동일

// { id, content }를 함수 몸체 내의 쉼표 연산자문으로 해석
// const create = (id, content) => { id, content };