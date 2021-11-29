# 정리

## 식별자
식별자<sup>identifier</sup>는 어떤 값을 구별해서 식별할 수 있는 고유한 이름을 말한다.  
식별자는 값이 아니라 메모리 주소를 기억하고 있다.  

## 값
값<sup>value</sup>은 식(표현식<sup>expression</sup>)이 평가<sup>evaluate</sup>되어 생성된 결과를 말한다.

```javascript  
1 + 2; // 3  
```

## 리터럴
리터럴<sup>literal</sup>은 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법<sup>notation</sup>을 말한다.

```javascript 
3  // 숫자 리터럴
```

|리터럴|예시|
|-----|-----|
|정수|100|
|부동소수점|10.5|
|2진수|0b01000001|
|8진수|0o101|
|16진수|0x41|
|문자열|'Hello'<br>"World"|
|불리언|true<br>false|
|null|null|
|undefined|undefined|
|객체|{ name: 'Jeong', address: 'None' }|
|배열|[ 1, 2, 3 ]|
|함수|function() {}|
|정규 표현식|/[A-Z]+/g|

## 표현식
표현식<sup>expression</sup>은 값으로 평가될 수 있는 문<sup>statement</sup>이다.  
즉, 표현식이 평가되면 새로운 값을 생성하거나 기존값을 참조한다.  
리터럴, 식별자(변수, 함수 등의 이름), 연산자, 함수 호출 등의 조합으로 이뤄질 수 있다.  
표현식과 표현식이 평가된 값은 동등한 관계, 즉 동치<sup>equivalent</sup>다.

```javascript
// 리터럴 표현식
10
'Hello'

// 식별자 표현식(이미 선언되어있다고 가정)
sum
person.name
arr[1]

// 연산자 표현식
10 + 20
sum = 10
sum !== 10

// 함수/메서드 호출 표현식(이미 선언되어있다고 가정)
square()
person.getName()
```

## 문
문<sup>statement</sup>은 프로그램을 구성하는 기본 단위이자 최소 실행 단위다.  
문은 여러 토큰으로 구성된다.
  - 토큰<sup>token</sup>이란 문법적인 의미를 가지며, 문법적으로 더 이상 나눌 수 없는 코드의 기본 요소를 의미한다.

```javascript
// 변수 선언문
let x;

// 할당문
x = 5;

// 함수 선언문
function func () {}

// 조건문
if (x > 1) { console.log(x); }

// 반복문
for (let i = 0; i < 2; i++) { console.log(i); }
```

> *표현식인 문과 표현식이 아닌 문을 구별하는 가장 간단하고 명료한 방법은 변수에 할당해 보는 것이다.*

## 객체  
객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.  
객체 타입<sup>object/reference type</sup>은 다양한 타입의 값을 하나의 단위로 구성한 복합적인 자료구조<sup>data structure</sup>다.  
또한 원시 타입의 값, 즉 원시 값은 변경 불가능한 값<sup>immutable value</sup>이지만 객체 타입의 값, 즉 객체는 변경 가능한 값<sup>mutable value</sup>이다.

```javascript
var counter = {
  num: 0,                 // 프로퍼티: 객체의 상태를 나타내는 값(data)
  increase: function () { // 메서드: 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)
    this.num++;
  }
};
```
> *객체 리터럴의 중괄호는 코드 블록을 의미하지 않기 때문에 세미콜론을 붙인다.*  
> *프로퍼티 키는 식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용해야 한다.*  

전역 객체<sup>global object</sup>: 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체다.  

## 함수
함수는 일련의 과정을 문<sup>statement</sup>으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것이다.  
함수 내부로 입력을 전달받는 변수를 **매개변수<sup>parameter</sup>(인자)**, 입력을 **인수<sup>argument</sup>**, 출력을 **반환값<sup>return value</sup>** 이라 한다.  
함수 이름은 함수 몸체 내부에서만 유효한 식별자이다.  
함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다.  
함수는 함수를 가리키는 식별자와 한 쌍의 소괄호인 함수 호출 연산자로 호출한다.  
함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않고 매개변수의 타입을 사전에 지정할 수 없다.  

|함수 정의 방식|예시|
|-----|-----|
|함수 선언문|function add(x, y) {<br>&nbsp;&nbsp;return x + y;<br>}|
|함수 표현식|var add = function (x, y) {<br>&nbsp;&nbsp;return x + y;<br>};|
|Function 생성자 함수|var add = new Function('x', 'y', 'return x + y');|
|화살표 함수|var add = (x, y) => x + y;|
> *함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 함수 호이스팅<sup>function hoisting</sup>이라 한다.*  
> *함수 표현식으로 함수를 정의하면 함수 호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생한다.*  

**콜백 함수<sup>callback function</sup>**: 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수  
**고차 함수<sup>Higher-Order Function, HOF</sup>**: 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수  

## 스코프
전역 스코프<sup>global scope</sup>와 지역 스코프<sup>local scope</sup>  
호이스팅은 스코프를 단위로 동작한다.  

**스코프 체인<sup>scope chain</sup>**: 실행 컨텍스트의 렉시컬 환경을 단방향으로 연결<sup>chaining</sup>한 것이다.  
**함수 레벨 스코프<sup>function level scope</sup>**: var키워드로 선언된 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정된다.  
**렉시컬 스코프<sup>lexical scope</sup>**: 함수 정의가 평가되는 시점에 상위 스코프가 정적으로 결정된다.  

## var 키워드
변수 중복 선언이 가능하고 중복 선언된 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.  
함수의 코드 블록만을 지역 스코프로 인정한다.  
변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어 올려진 것처럼 동작한다.  

## let 키워드
변수를 중복 선언하면 문법 에러<sup>SyntaxError</sup>가 발생한다.  
모든 코드 블록을 지역 스코프로 인정하는 블록 레벨 스코프<sup>block-level scope</sup>를 따른다.  
선언 단계와 초기화 단계가 분리되어 진행된다. 초기화 단계는 변수 선언문에 도달했을 때 실행된다.  
let 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다.  

## const 키워드
상수<sup>constant</sup>를 선언하기 위해 사용한다. *예) const TAX_RATE = 0.1;*  
const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 하고 재할당이 금지된다.  
원시 값을 할당한 경우 할당된 값을 변경할 수 있는 방법은 없다.  
const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.  

## 프로퍼티 어트리뷰트
내부 슬롯<sup>internal slot</sup>과 내부 메서드<sup>internal method</sup>는 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript 사양에서 사용하는 의사 프로퍼티<sup>pseudo property</sup>와 의사 메서드<sup>pseudo method</sup>다.  
자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.  
프로퍼티의 상태란 프로퍼티의 값<sup>value</sup>, 값의 갱신 가능 여부<sup>writable</sup>, 열거 가능 여부<sup>enumerable</sup>, 재정의 가능 여부<sup>configurable</sup>를 말한다.  

**데이터 프로퍼티<sup>data property</sup>**: 키와 값으로 구성된 일반적인 프로퍼티다.  
```javascript
const person = {
  name: 'Lee'
};

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// {value: "Lee", writable: true, enumerable: true, configurable: true}
```

**접근자 프로퍼티<sup>accessor property</sup>**: 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티다.  
```javascript
const person = {
  firstName: 'Ungmo',
  lastName: 'Lee',
  
  // 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  // 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};
```

**프로퍼티 정의**: 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 기존 프로퍼티의 프로퍼티 어트리뷰트를 재저의하는 것을 말한다.  
```javascript
const person = {};

Object.defineProperty(person, 'firstName', {
  value: 'Ungmo',
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(person, 'lastName', {
  value: 'Lee'
});

Object.defineProperty(person, 'fullName' {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
  enumerable: true,
  configurable: true
});
```

프로퍼티 디스크립터 객체에서 생략된 어트리뷰트는 다음과 같이 기본값이 적용된다.  
|프로퍼티 디스크립터 객체의 프로퍼티|대응하는 프로퍼티 어트리뷰트|생략할 때의 기본값|
|---|---|---|
|value|[[Value]]|undefined|
|get|[[Get]]|undefined|
|set|[[Set]]|undefined|
|writable|[[Writable]]|false|
|enumerable|[[Enumerable]]|false|
|configurable|[[Configurable]]|false|

자바스크립트는 객체의 변경을 방지하는 다양한 메서드를 제공한다.
|구분|메서드|추가|삭제|값 읽기|값 쓰기|어트리뷰트 재정의|
|---|---|:---:|:---:|:---:|:---:|:---:|
|객체 확장 금지|Object.preventExtensions|Χ|Ο|Ο|Ο|Ο|
|객체 밀봉|Object.seal|Χ|Χ|Ο|Ο|Χ|
|객체 동결|Object.freeze|Χ|Χ|Ο|Χ|Χ|

---
연산자<sup>operator</sup>  
피연산자<sup>operand</sup>  
부수 효과<sup>side effect</sup>  
암묵적 타입 변환<sup>implicit coercion</sup> 또는 타입 강제 변환<sup>type coercion</sup>  
동등 비교<sup>loose equality</sup>(값)  
일치 비교<sup>strict equality</sup>(값과 타입)  
삼항 조건 연산자<sup>temary operator</sup>(값으로 평가할 수 있는 표현식인 문)  
폴스루<sup>fall through</sup>  
레이블 문<sup>label statement</sup>  
명시적 타입 변환<sup>explicit coercion</sup> 또는 타입 캐스팅<sup>type casting</sup>  
단축 평가<sup>short-circuit evaluation</sup>  
옵셔널 체이닝<sup>optional chaining</sup>(?.)  
null 병합<sup>nullish coalescing</sup>(??)  
계산된 프로퍼티 이름<sup>computed property name</sup>  
유사 배열 객체<sup>array-like object</sup>  
얕은 복사<sup>shallow copy</sup>와 깊은 복사<sup>deep copy</sup>  
생성자 함수<sup>constructor function</sup>(객체를 생성하는 함수)  
즉시 실행 함수<sup>IIFE, Immediately Invoked Function Expression</sup>  
중첩 함수<sup>nested function</sup>또는 내부 함수<sup>inner function</sup>  
순수 함수<sup>pure function</sup>와 비순수 함수<sup>impure function</sup>  
암묵적 결합<sup>implicit coupling</sup>  
일시적 사각지대<sup>Temporal Dead Zone, TDZ</sup>(스코프 시작 시점부터 초기화 시작 시점까지 변수를 참조할 수 없는 구간)  
프로퍼티 디스크립터<sup>PropertyDescriptor</sup> 객체  
