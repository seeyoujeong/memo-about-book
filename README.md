# 정리

## 목차  
- [식별자](#식별자)  
- [값](#값)  
- [리터럴](#리터럴)  
- [표현식](#표현식)  
- [문](#문)  
- [객체](#객체)  
- [함수](#함수)  
- [스코프](#스코프)  
- [var, let, const](#var-let-const)  
- [프로퍼티 어트리뷰트](#프로퍼티-어트리뷰트)  
- [프로토타입](#프로토타입)  

## 식별자
식별자<sup>identifier</sup>는 어떤 값을 구별해서 식별할 수 있는 고유한 이름을 말한다.  
식별자는 값이 아니라 메모리 주소를 기억하고 있다.  

## 값
값<sup>value</sup>은 식(표현식<sup>expression</sup>)이 평가<sup>evaluate</sup>되어 생성된 결과를 말한다.
값을 사용할 수 있는 곳: 변수 할당문, 객체의 프로퍼티 값, 배열의 요소, 함수 호출의 인수, 함수 반환문  

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
자바스크립트를 이루고 있는 거의 *모든 것*이 객체다.  
객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.  
객체 타입<sup>object/reference type</sup>은 다양한 타입의 값을 하나의 단위로 구성한 복합적인 자료구조<sup>data structure</sup>다.  
객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조라고 할 수 있다.  
원시 타입의 값, 즉 원시 값은 변경 불가능한 값<sup>immutable value</sup>이지만 객체 타입의 값, 즉 객체는 변경 가능한 값<sup>mutable value</sup>이다.  

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

**전역 객체<sup>global object</sup>**: 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체다.  

### 일급 객체
1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
3. 함수의 매개변수에 전달할 수 있다.
4. 함수의 반환값으로 사용할 수 있다.

## 함수
함수는 일련의 과정을 문<sup>statement</sup>으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것이다.  
함수 내부로 입력을 전달받는 변수를 **매개변수<sup>parameter</sup>(인자)**, 입력을 **인수<sup>argument</sup>**, 출력을 **반환값<sup>return value</sup>** 이라 한다.  
함수 이름은 함수 몸체 내부에서만 유효한 식별자이다.  
함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다.  
함수는 함수를 가리키는 식별자와 한 쌍의 소괄호인 함수 호출 연산자로 호출한다.  
함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않고 매개변수의 타입을 사전에 지정할 수 없다.  
일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.  
함수 객체는 callable이면서 constructor이거나 callable이면서 non-constructor다.  
함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미다.  
함수 객체의 데이터 프로퍼티로 arguments, caller, length, name, prototype이 있다.  

|함수 정의 방식|예시|
|-----|-----|
|함수 선언문|function add(x, y) {<br>&nbsp;&nbsp;return x + y;<br>}|
|함수 표현식|var add = function (x, y) {<br>&nbsp;&nbsp;return x + y;<br>};|
|Function 생성자 함수|var add = new Function('x', 'y', 'return x + y');|
|화살표 함수|var add = (x, y) => x + y;|
|메서드 축약 표현|const obj = {<br>&nbsp;&nbsp;foo() {}<br>};|  
> *함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 함수 호이스팅<sup>function hoisting</sup>이라 한다.*  
> *함수 표현식으로 함수를 정의하면 함수 호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생한다.*  

**콜백 함수<sup>callback function</sup>**: 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수  
**고차 함수<sup>Higher-Order Function, HOF</sup>**: 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수  
**생성자 함수<sup>constructor</sup>**: new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수  

### prototype 프로퍼티
prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체, 즉 constructor만이 소유하는 프로퍼티다.  
prototype 프로퍼티는 함수가 객체를 생성하는 생성자 함수로 호출될 때 생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가리킨다.  

## 스코프
모든 식별자는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다.  
전역 스코프<sup>global scope</sup>와 지역 스코프<sup>local scope</sup>  
호이스팅은 스코프를 단위로 동작한다.  

**스코프 체인<sup>scope chain</sup>**: 실행 컨텍스트의 렉시컬 환경을 단방향으로 연결<sup>chaining</sup>한 것이다.  
**함수 레벨 스코프<sup>function level scope</sup>**: var키워드로 선언된 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정된다.  
**렉시컬 스코프<sup>lexical scope</sup>**: 함수 정의가 평가되는 시점에 상위 스코프가 정적으로 결정된다.  

## var, let, const  
### var 키워드
변수 중복 선언이 가능하고 중복 선언된 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.  
함수의 코드 블록만을 지역 스코프로 인정한다.  
변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어 올려진 것처럼 동작한다.  

### let 키워드
변수를 중복 선언하면 문법 에러<sup>SyntaxError</sup>가 발생한다.  
모든 코드 블록을 지역 스코프로 인정하는 블록 레벨 스코프<sup>block-level scope</sup>를 따른다.  
선언 단계와 초기화 단계가 분리되어 진행된다. 초기화 단계는 변수 선언문에 도달했을 때 실행된다.  
let 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다.  

### const 키워드
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
- __proto__는 Object.prototype 객체의 접근자 프로퍼티다.  

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

자바스크립트는 객체의 변경을 방지하는 다양한 메서드(얕은 변경 방지<sup>shallow only</sup>)를 제공한다.
|구분|메서드|추가|삭제|값 읽기|값 쓰기|어트리뷰트 재정의|
|---|---|:---:|:---:|:---:|:---:|:---:|
|객체 확장 금지|Object.preventExtensions|Χ|Ο|Ο|Ο|Ο|
|객체 밀봉|Object.seal|Χ|Χ|Ο|Ο|Χ|
|객체 동결|Object.freeze|Χ|Χ|Ο|Χ|Χ|

**in 연산자**: 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인한다.(확인 대상 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인)  
**Object.prototype.hasOwnProperty 메서드**: 전달받은 프로퍼티 키가 객체 고유의 프로퍼티 키인 경우에만 true를 반환한다.  
**for...in 문**: 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 true인 프로퍼티를 순회하며 열거한다.   
**Object.keys/values/entries 메서드**: keys 메서드는 객체 자신의 열거 가능한 프로퍼티 키를, values 메서드는 프로퍼티 값을, entries 메서드는 프로퍼티 키와 값의 쌍의 배열을 배열로 반환한다.  

## 프로토타입
자바스크립트는 프로토타입<sup>prototype</sup>을 기반으로 상속을 구현한다.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

Person.staticProp = 'static prop';

Person.staticMethod = function () {
  console.log('staticMethod');
};
```
모든 객체가 가지고 있는 \_\_proto__ 접근자 프로퍼티와 함수 객체만 가지고 있는 prototype 프로퍼티는 결국 동일한 프로토타입을 가리킨다.  
|구분|소유|값|사용 주체|사용 목적|
|---|---|---|---|---|
|\_\_proto__ <br>접근자 프로퍼티|모든 객체|프로토타입의 참조|모든 객체|객체 자신의 프로토타입에 접근 또는 교체하기<br> 위해 사용|
|prototype <br>프로퍼티|constructor|프로토타입의 참조|생성자 함수|생성자 함수가 자신의 생성할 객체(인스턴스)의<br> 프로토타입을 할당하기 위해 사용|

프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍<sup>pair</sup>으로 존재한다.  
프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성된다.  
생성자 함수로서 호출할 수 있는 함수, 즉 constructor는 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.  
사용자 정의 생성자 함수와 더불어 생성된 프로토타입은 오직 constructor 프로퍼티만을 갖는 객체다.  
프로토타입도 객체이고 모든 객체는 프로토타입을 가지므로 프로토타입도 자신의 프로토타입을 갖는다.  
하위 객체를 통해 프로토타입의 프로퍼티를 변경 또는 삭제하는 것은 불가능하다.  

**프로토타입 체인**: 객체의 프로퍼티(메서드 포함)에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 [[Prototype]] 내부 슬롯의 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다.  

객체 **instanceof** 생성자 함수
- 우변의 생성자 함수의 prototype에 바인딩된 객체가 좌변의 객체의 프로토타입 체인 상에 존재하면 true로 평가된다.  
- 생성자 함수의 prototype에 바인딩된 객체가 프로토타입 체인 상에 존재하는지 확인한다.  

**정적<sup>static</sup>프로퍼티/메서드**: 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출할 수 있는 프로퍼티/메서드를 말한다.  

## this
this는 객체 자신의 프로퍼티나 메서들 참조하기 위한 자기 참조 변수<sup>self-referenceing variable</sup>다.  

|함수 호출 방식|this가 가리키는 값(this 바인딩)|
|---|---|
|일반 함수로서 호출|전역 객체|
|메서드로서 호출|메서드를 호출한 객체(마침표 앞의 객체)|
|생성자 함수로서 호출|생성자 함수가 (미래에) 생성할 인스턴스|

**new.target**: constructor인 모든 함수 내부에 암묵적인 지역 변수와 같이 사용되며 메타 프로퍼티라고 부른다.  

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
바인딩<sup>name binding</sup>(식별자와 값을 연결하는 과정을 의미)  
스코프 세이프 생성자 패턴<sup>scope-safe constructor</sup>  
프로퍼티 섀도잉<sup>property shadowing</sup>  
