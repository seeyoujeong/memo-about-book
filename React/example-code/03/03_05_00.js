// 잘못된 코드
// 클래스형 컴포넌트에서
this.state.number = this.state.number + 1;
this.state.array = this.array.push(2);
this.state.object.value = 5;

// 함수형 컴포넌트에서
const [object, setObject] = useState({ a: 1, b: 1 });
object.b = 2;

// 올바른 코드
// 객체 다루기
const object = { a: 1, b: 2, c: 3 };
const nextObject = { ...object, b: 2 }; // 사본을 만들어서 b값만 덮어 쓰기

// 배열 다루기
const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: false }
];
let nextArray = array.concat({ id: 4 });
nextArray.filter(item => item.id !== 2); 
nextArray.map(item => (item.id === 1 ? { ...item, value: false } : item)); 