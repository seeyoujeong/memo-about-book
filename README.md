# 모던 자바스크립트 Deep Dive

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
- [this](#this)  
- [실행 컨텍스트](#실행-컨텍스트)  
- [클로저](#클로저)
- [클래스](#클래스)  
- [배열](#배열)  
- [Number](#number)  
- [Math](#math)  
- [Date](#date)
- [RegExp](#regexp)
- [String](#string)
- [Symbol](#symbol)
- [Iterable](#iterable)
- [스프레드 문법](#스프레드-문법)
- [디스트럭처링 할당](#디스트럭처링-할당)
- [Set](#set)
- [Map](#map)
- [브라우저의 렌더링 과정](#브라우저의-렌더링-과정)
- [DOM](#dom)

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

### 전역 객체<sup>global object</sup>
코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체다.  
계층적 구조상 어떤 객체에도 속하지 않은 모든 빌트인 객체(표준 빌트인 객체와 호스트 객체)의 최상위 객체다.  
전역 객체가 최상위 객체라는 것은 프로토타입 상속 관계상에서 최상위 객체라는 의미가 아니다.  
전역 객체 자신은 어떤 객체의 프로퍼티도 아니며 객체의 계층적 구조상 표준 빌트인 객체와 호스트 객체를 프로퍼티로 소유한다는 것을 말한다.  

### 일급 객체
1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
3. 함수의 매개변수에 전달할 수 있다.
4. 함수의 반환값으로 사용할 수 있다.

---
표준 빌트인 객체<sup>standard built-in objects/native objects/global objects</sup>  
호스트 객체<sup>host objects</sup>  
사용자 정의 객체<sup>user-defined objects</sup>  
래퍼 객체<sup>wrapper object</sup>  

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
함수는 자신의 내부 슬록 [[Environment]]에 자신이 정의된 환경, 즉 상위 스코프의 참조를 저장한다.  
매개변수 기본값은 매개변수에 인수를 전달하지 않은 경우와 undefined를 전달한 경우에만 유효하다.  
매개변수 기본값은 length 프로퍼티와 arguments 객체에 아무런 영향을 주지 않는다.  

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
**생성자 함수<sup>constructor function</sup>**: new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수  

### 빌트인 전역 함수
**eval**: 자바스크립트 코드를 나타내는 문자열을 인수로 전달받는다.  
**isFinite**: 전달받은 인수가 정상적인 유한수인지 검사한다.  
**isNaN**: 전달받은 인수가 NaN인지 검사한다.  
**parseFloat**: 전달받은 문자열 인수를 부동 소수점 숫자로 해석<sup>parsing</sup>하여 반환한다.  
**parseInt**: 전달받은 문자열 인수를 정수로 해석하여 반환한다.  
**encodeURI**: 완전한 URI<sup>Uniform Resource Identifier</sup>를 문자열로 전달받아 이스케이프 처리를 위해 인코딩한다.  
**decodeURI**: 인코딩된 URI를 인수로 전달받아 이스케이프 처리 이전으로 디코딩한다.  
**encodeURIComponent**: URI 구성 요소를 인수로 전달받아 인코딩한다.  
**decodeURIComponent**: 매개변수로 전달된 URI 구성 요소를 디코딩한다.  

### prototype 프로퍼티
prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체, 즉 constructor만이 소유하는 프로퍼티다.  
prototype 프로퍼티는 함수가 객체를 생성하는 생성자 함수로 호출될 때 생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가리킨다.  

### 즉시 실행 함수<sup>IIFE, Immediately Invoked Function Expression</sup>  
함수 정의와 동시에 즉시 호출되는 함수를 말하고 단 한 번만 호출되며 다시 호출할 수 없다.  
```javascript
const counter = (function () {
  let counter = 0;
  
  return function (predicate) {
    counter = predicate(counter)
    return counter;
  };
}());
```

**ES6에서는 함수를 사용 목적에 따라 세 가지 종류로 명확히 구분했다.**
|ES6 함수의 구분|constructor|prototype|super|arguments|
|---|:---:|:---:|:---:|:---:|
|일반 함수|Ο|Ο|Χ|Ο|
|메서드|Χ|Χ|Ο|Ο|
|화살표 함수|Χ|Χ|Χ|Χ|
> *ES6 사양에서 메서드는 메서드 축약 표현으로 정의된 함수만을 의미한다.*  
> *ES6 메서드는 자신을 바인딩한 객체를 가리키는 내부 슬롯 [[HomeObject]]를 갖는다.*

### 화살표 함수
화살표 함수는 선언문으로 정의할 수 없고 함수 표현식으로 정의해야 한다.  
매개변수가 한 개인 경우 소괄호를 생략할 수 있다.  
함수 몸체가 하나의 문으로 구성된다면 함수 몸체를 감싸는 중괄호를 생략할 수 있고 이때 함수 몸체 내부의 문이 값으로 평가될 수 있는 표현식인 문이라면 암묵적으로 반환된다.  
객체 리터럴을 반환하는 경우 객체 리터럴을 소괄호로 감싸 주어야 한다.  
화살표 함수도 즉시 실행 함수로 사용할 수 있다.  

**화살표 함수와 일반 함수의 차이**
1. 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor다.
2. 중복된 매개변수 이름을 선언할 수 없다.
3. 화살표 함수는 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않는다.  

### Rest 파라미터
함수에 전달된 인수들의 목록을 배열로 전달받는다.  
Rest 파라미터는 반드시 마지막 파라미터이어야 한다.  
Rest 파라미터는 단 하나만 선언할 수 있다.  
Rest 파라미터에는 기본값을 지정할 수 없다.  

---
중첩 함수<sup>nested function</sup>또는 내부 함수<sup>inner function</sup>  
순수 함수<sup>pure function</sup>와 비순수 함수<sup>impure function</sup>  

## 스코프
모든 식별자는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 유효 범위가 결정된다.  
전역 스코프<sup>global scope</sup>와 지역 스코프<sup>local scope</sup>이 있다.  
호이스팅은 스코프를 단위로 동작한다.  
스코프의 실체는 실행 컨텍스트의 렉시컬 환경이다.  
외부 렉시컬 환경에 대한 참조를 통해 상위 렉시컬 환경과 연결된 것을 스코프 체인이라고 한다.  

**스코프 체인<sup>scope chain</sup>**: 실행 컨텍스트의 렉시컬 환경을 단방향으로 연결<sup>chaining</sup>한 것이다.  
**함수 레벨 스코프<sup>function level scope</sup>**: var키워드로 선언된 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정된다.  
**렉시컬 스코프<sup>lexical scope</sup>**: 렉시컬 환경의 "외부 렉시컬 환경에 대한 참조"에 저장할 참조값, 즉 상위 스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된 환경(위치)에 의해 결정된다.  

## var, let, const  
### var 키워드
변수 중복 선언이 가능하고 중복 선언된 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.  
함수의 코드 블록만을 지역 스코프로 인정한다.  
변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어 올려진 것처럼 동작한다.  
선언 단계와 초기화 단계가 동시에 진행된다.  

### let 키워드
변수를 중복 선언하면 문법 에러<sup>SyntaxError</sup>가 발생한다.  
모든 코드 블록을 지역 스코프로 인정하는 블록 레벨 스코프<sup>block-level scope</sup>를 따른다.  
선언 단계와 초기화 단계가 분리되어 진행된다. 초기화 단계는 변수 선언문에 도달했을 때 실행된다.  
let 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다.  
선언적 환경 레코드<sup>Declarative Environment Record</sup>에서 관리한다.  

### const 키워드
상수<sup>constant</sup>를 선언하기 위해 사용한다. *예) const TAX_RATE = 0.1;*  
const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 하고 재할당이 금지된다.  
원시 값을 할당한 경우 할당된 값을 변경할 수 있는 방법은 없다.  
const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.  
선언적 환경 레코드<sup>Declarative Environment Record</sup>에서 관리한다.  

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

### 빌트인 전역 프로퍼티
**Infinity**: 무한대를 나타내는 숫자값 Infinity를 갖는다.  
**NaN**: 숫자가 아님(Not-a-Number)을 나타내는 숫자값 NaN을 갖는다.  
**undefined**: 원시 타입 undefined를 값으로 갖는다.  

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
this는 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수<sup>self-referenceing variable</sup>다.  

|함수 호출 방식|this가 가리키는 값(this 바인딩)|
|---|---|
|일반 함수로서 호출|전역 객체|
|메서드로서 호출|메서드를 호출한 객체(마침표 앞의 객체)|
|생성자 함수로서 호출|생성자 함수가 (미래에) 생성할 인스턴스|  
> *this 바인딩은 함수 호출 시점에 결정된다.*  
> *strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다.*  
> *메서드 내부의 this는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에 바인딩된다.*  

### Function.prototype.apply/call/bind 메서드
apply와 call 메서드의 본질적인 기능은 함수를 호출하는 것이다.  
bind 메서드는 apply와 call 메서드와 달리 함수를 호출하지 않고 this로 사용할 객체만 전달한다.  

**new.target**: constructor인 모든 함수 내부에 암묵적인 지역 변수와 같이 사용되며 메타 프로퍼티라고 부른다.  
this 바인딩은 전역 환경 레코드와 함수 환경 레코드에만 존재한다.  
strict mode에서 일반 함수로서 호출된 모든 함수 내부의 this에는 전역 객체가 아니라 undefined가 바인딩된다.  
클래스 필드에 할당한 화살표 함수 내부에서 참조한 this는 constructor 내부의 this 바인딩과 같다.  

## 실행 컨텍스트
실행 컨텍스트<sup>execution context</sup>는 자바스크립트의 동작 원리를 담고 있는 핵심 개념이다.  
소스코드를 실행하는 데 필요한 환경을 제공하고 코드의 실행 결과를 실제로 관리하는 영역이다.  
식별자(변수, 함수, 클래스 등의 이름)를 등록하고 관리하는 스코프와 코드 실행 순서 관리를 구현한 내부 메커니즘으로, 모든 코드는 실행 컨텍스트를 통해 실행되고 관리된다.  
식별자와 스코프는 실행 컨텍스트의 렉시컬 환경으로 관리하고 코드 실행 순서는 실행 컨텍스트 스택으로 관리한다.  
실행 컨텍스트 스택의 최상위에 존재하는 실행 컨텍스트는 언제나 현재 실행 중인 코드의 실행 컨텍스트다.  
LexicalEnvironment 컴포넌트와 VariableEnvironment 컴포넌트로 구성된다.  

|소스코드의 타입|설명|
|---|---|
|전역 코드|전역에 존재하는 소스코드를 말한다. 전역에 정의된 함수, 클래스 등의 내부 코드는 포함되지 않는다.|
|함수 코드|함수 내부에 존재하는 소스코드를 말한다. 함수 내부에 중첩된 함수, 클래스 등의 내부 코드는 포함되지 않는다.|
|eval 코드|빌트인 전역 함수인 eval함수에 인수로 전달되어 실행되는 소스코드를 말한다.|
|모듈 코드|모듈 내부에 존재하는 소스코드를 말한다. 모듈 내부의 함수, 클래스 등의 내부 코드는 포함되지 않는다.|
> *소스코드의 타입에 따라 실행 컨텍스트를 생성하는 과정과 관리 내용이 다르다.*  

### 소스코드의 평가와 실행
자바스크립트 엔진은 소스코드를 2개의 과정, 즉 "소스코드의 평가"와 "소스코드의 실행" 과정으로 나누어 처리한다.  
1. 소스코드 평가 과정에서는 실행 컨텍스트를 생성하고 변수, 함수 등의 선언문만 먼저 실행하여 생성된 변수나 함수 식별자를 키로 실행 컨텍스트가 관리하는 스코프(렉시컬 환경의 환경 레코드)에 등록한다.  
2. 소스코드 평가 과정이 끝나면 비로소 선언문을 제외한 소스코드가 순차적으로 실행되기 시작한다. 즉, 런타임이 시작된다. 이때 소스코드 실행에 필요한 정보, 즉 변수나 함수의 참조를 실행 컨텍스트가 관리하는 스코프에서 검색해서 취득한다. 그리고 변수 값의 변경 등 소스코드의 실행 결과는 다시 실행 컨텍스트가 관리하는 스코프에 등록된다.  

### 렉시컬 환경
렉시컬 환경<sup>Lexical Enviroment</sup>은 식별자와 식별자에 바인딩된 값, 그리고 상위 스코프에 대한 참조를 기록하는 자료구조로 실행 컨텍스트를 구성하는 컴포넌트다.  
키와 값을 갖는 객체 형태의 스코프(전역, 함수, 블록 스코프)를 생성하여 식별자를 키로 등록하고 식별자에 바인딩된 값을 관리한다.  
렉시컬 환경은 실행 컨텍스트에 의해 참조되기는 하지만 독립적인 객체다.  
렉시컬 환경은 두 개의 컴포넌트로 구성된다.  
1. **환경 레코드<sup>Environment Record</sup>**  
   스코프에 포함된 식별자를 등록하고 등록된 식별자에 바인딩된 값을 관리하는 저장소다. 환경 레코드는 소스코드의 타입에 따라 관리하는 내용에 차이가 있다.  
2. **외부 렉시컬 환경에 대한 참조<sup>Outer Lexical Environment Reference</sup>**  
   외부 렉시컬 환경에 대한 참조는 상위 스코프를 가리킨다. 이때 상위 스코프란 외부 렉시컬 환경, 즉 해당 실행 컨텍스트를 생성한 소스코드를 포함하는 상위 코드의 렉시컬 환경을 말한다. 외부 렉    시컬 환경에 대한 참조를 통해 단방향 링크드 리스트인 스코프 체인을 구현한다.  

### 전역 코드 평가
1. 전역 실행 컨텍스트 생성  
2. 전역 렉시컬 환경 생성  
   1. 전역 환경 레코드 생성   
      1. 객체 환경 레코드 생성  
      2. 선언적 환경 레코드 생성  
   2. this 바인딩  
   3. 외부 렉시컬 환경에 대한 참조 결정  

### 함수 코드 평가
1. 함수 실행 컨텍스트 생성  
2. 함수 렉시컬 환경 생성  
   1. 함수 환경 레코드 생성  
   2. this 바인딩  
   3. 외부 렉시컬 환경에 대한 참조 결정  

![execution_context](https://user-images.githubusercontent.com/40534414/145710606-158dbe7b-be8b-4366-a390-8f89294bac23.png)

### 실행 컨텍스트와 블록 레벨 스코프  
let, const 키워드로 선언한 변수는 모든 코드 블록을 지역 스코프로 인정하는 블록 레벨 스코프를 따르기 때문에 선언적 환경 레코드를 갖는 렉시컬 환경을 새롭게 생성하여 기존의 전역 렉시컬 환경을 교체한다.  

### 식별자 결정
동일한 이름의 식별자가 다른 스코프에 여러 개 존재할 수도 있기 때문에 어느 스코프의 식별자를 참조하면 되는지 결정할 필요가 있다.  
식별자 결정을 위해 식별자를 검색할 때는 실행 중인 실행 컨텍스트에서 식별자를 검색하기 시작한다.  
선언된 식별자는 실행 컨텍스트의 렉시컬 환경의 환경 레코드에 등록되어 있다.  

## 클로저
외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있다.  
중첩 함수가 상위 스코프의 식별자를 참조하고 있고 중첩 함수가 외부 함수보다 더 오래 유지되는 경우에 한정하는 것이 일반적이다.  
"함수가 자유 변수에 대해 닫혀있다.", 쉽게 의역하면 "자유 변수에 묶여있는 함수"라고 할 수 있다.  
클로저는 상태가 의도치 않게 변경되지 않도록 안전하게 은닉<sup>information hiding</sup>하고 특정 함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기 위해 사용한다.  

**자유 변수<sup>free variable</sup>**: 클로저에 의해 참조되는 상위 스코프의 변수  

## 클래스
클래스는 값으로 사용할 수 있는 일급 객체이다.  
클래스는 생성자 함수와 마찬가지로 프로토타입 기반의 객체 생성 메커니즘이다.  
클래스 몸체에서 정의할 수 있는 메서드는 constructor(생성자), 프로토타입 메서드, 정적 메서드의 세 가지가 있다.  
클래스의 constructor 메서드와 프로토타입의 constructor 프로퍼티는 직접적인 관련이 없다.  
서브클래스는 자신이 직접 인스턴스를 생성하지 않고 수퍼클래스에게 인스턴스를 생성을 위임한다.  
```javascript
class Person {
  // private 필드 정의
  #age = '';
  // static private 필드 정의
  static #tribe = 'human';
  
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
  
  static sayHello() {
    console.log('Hello!');
  }
}
```

**클래스와 생성자 함수의 차이**  
1. 클래스를 new 연산자 없이 호출하면 에러가 발생한다. 
2. 클래스는 상속을 지원하는 extends와 super 키워드를 제공한다.
3. 클래스는 호이스팅이 발생하지 않는 것처럼 동작한다.
4. 클래스 내의 모든 코드에는 암묵적으로 strict mode가 지정되어 실행되며 strict mode를 해제할 수 없다.
5. 클래스의 constructor, 프로토타입 메서드, 정적 메서드는 모두 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false다. 

**정적 메서드와 프로토타입 메서드의 차이**  
1. 정적 메서드와 프로토타입 메서드는 자신이 속해 있는 프로토타입 체인이 다르다.
2. 정적 메서드는 클래스로 호출하고 프로토타입 메서드는 인스턴스로 호출한다.
3. 정적 메서드는 인스턴스 프로퍼티를 참조할 수 없지만 프로토타입 메서드는 인스턴스 프로퍼티를 참조할 수 있다.  

**클래스에서 정의한 메서드의 특징**
1. function 키워드를 생략한 메서드 축약 표현을 사용한다. 
2. 객체 리터럴과는 다르게 클래스에 메서드를 정의할 때는 콤마가 필요 없다.
3. 암묵적으로 strict mode로 실행된다.
4. for...in 문이나 Object.keys 메서드 등으로 열거할 수 없다.
5. 내부 메서드 [[Construct]]를 갖지 않는 non-constructor다.  

**super 키워드**
- super를 호출하면 수퍼클래스의 constructor(super-constructor)를 호출한다.  
  - 서브클래스에서 constructor를 생략하지 않는 경우 서브클래스의 constructor에서 반드시 super를 호출해야한다.
  - 서브클래스의 constructor에서 super를 호출하기 전에는 this를 참조할 수 없다.
  - super는 반드시 서브클래스의 constructor에서만 호출한다.
- super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.
  - 서브클래스의 프로토타입 메서드 내에서 super.method는 수퍼클래스의 프로토타입 메서드 method를 가리킨다.
  - ES6의 메서드 축약 표현으로 정의된 함수만이 [[HomeObject]]를 갖는다는 것이다.  
  - 서브클래스의 정적 메서드 내에서 super.method는 수퍼클래스의 정적 메서드 method를 가리킨다.

## 배열
자바스크립트의 배열은 일반적인 배열의 동작을 흉내 낸 특수한 객체다.  
인덱스로 배열 요소에 접근하는 경우에는 일반적인 배열보다 느리다.  
특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠르다.  
배열은 요소를 최대 <img src="https://render.githubusercontent.com/render/math?math=2^{32} - 1">(4,294,967,295)개 가질 수 있다.  
배열에는 같은 타입의 요소를 연속적으로 위치시키는 것이 최선이다.  
정수 이외의 값을 인덱스처럼 사용하면 요소가 생성되는 것이 아니라 프로퍼티가 생성된다.  

**밀집 배열<sup>dense array</sup>**: 배열의 요소는 하나의 데이터 타입으로 통일되어 있으며 서로 연속적으로 인접해 있는 배열이다.  
**회소 배열<sup>sparse array</sup>**: 배열의 요소가 연속적으로 이어져 있지 않고 length와 배열 요소의 개수가 일치하지 않는다.  

### 배열 생성
**배열 리터럴**: 0개 이상의 요소를 쉼표로 구분하여 대괄호로 묶는다.  
**Array 생성자 함수**: 전달된 인수가 1개이고 숫자인 경우 length 프로퍼티 값이 인수인 배열을 생성한다.  
**Array.of 메서드**: 전달된 인수를 요소로 갖는 배열을 생성한다.  
**Array.from 메서드**: 유사 배열 객체 또는 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환한다. 두 번째 인수로 전달한 콜백 함수를 통해 값을 만들면서 요소를 채울 수 있다.  

- **유사 배열 객체<sup>array-like object</sup>**  
마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고 length 프로퍼티를 갖는 객체를 말한다.  
유사 배열 객체는 length 프로퍼티를 갖기 때문에 for 문으로 순회할 수 있다.  
인덱스를 나타내는 숫자 형식의 문자열을 프로퍼티 키로 가지므로 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있다.  
유사 배열 객체는 이터러블이 아닌 일반 객체이므로 Symbol.iterator 메서드가 없기 때문에 for...of 문으로 순회할 수 없다.  

### 배열 메서드
배열에는 원본 배열(배열 메서드를 호출한 배열, 즉 배열 메서드의 구현체 내부에서 this가 가리키는 객체)을 직접 변경하는 메서드<sup>mutator method</sup>와 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드<sup>accessor method</sup>가 있다.  

**Array.isArray 메서드**: 전달된 인수가 배열이면 true, 배열이 아니면 false를 반환한다.  
**Array.prototype.indexOf 메서드**: 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다.  
**Array.prototype.push 메서드<sup>m</sup>**: 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고 변경된 length 프로퍼티 값을 반환한다.  
**Array.prototype.pop 메서드<sup>m</sup>**: 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.  
**Array.prototype.unshift 메서드<sup>m</sup>**: 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 프로퍼티 값을 반환한다.  
**Array.prototype.shift 메서드<sup>m</sup>**: 원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환한다.  
**Array.prototype.concat 메서드**: 인수로 전달된 값들(배열 또는 원시값)을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다. 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다.  
**Array.prototype.splice 메서드<sup>m</sup>**: 원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하고 제거한 요소를 반환한다.  
**Array.prototype.slice 메서드**: 첫 번째 인수로 전달받은 인덱스부터 두 번째 인수로 전달받은 인덱스 이전까지 요소들을 복사하여 배열로 반환한다.  
**Array.prototype.join 메서드**: 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열로 연결한 문자열을 반환한다.  
**Array.prototype.reverse 메서드<sup>m</sup>**: 원본 배열의 순서를 반대로 뒤집고 변경된 배열을 반환한다.  
**Array.prototype.fill 메서드<sup>m</sup>**: 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다.  
**Array.prototype.includes 메서드**: 배열 내에 특정 요소가 포함되어 있는지 확인하여 true 또는 false를 반환한다.  
**Array.prototype.flat 메서드**: 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화한다.  

### 배열 고차 함수
**Array.prototype.sort 메서드<sup>m</sup>**: 유니코드 코드 포인트의 순서로 배열의 요소를 정렬하고 정렬된 배열을 반환한다.  
**Array.prototype.forEach 메서드**: 내부에서 반복문을 통해 자신을 호출한 배열을 순회하면서 수행해야 할 처리를 콜백 함수로 전달받아 반복 호출한다.  
**Array.prototype.map 메서드**: 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출하고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다.  
**Array.prototype.filter 메서드**: 콜백 함수의 true인 요소로만 구성된 새로운 배열을 반환한다.  
**Array.prototype.reduce 메서드**: 콜백 함수의 반환값을 다음 순회 시에 콜백 함수의 첫 번째 인수로 전달하면서 콜백 함수를 호출하여 하나의 결과값을 만들어 반환한다.  
**Array.prototype.some 메서드**: 콜백 함수의 반환값이 단 한 번이라도 참이면 true, 모두 거짓이면 false를 반환한다.  
**Array.prototype.every 메서드**: 콜백 함수의 반환값이 모두 참이면 true, 단 한 번이라도 거짓이면 false를 반환한다.  
**Array.prototype.find 메서드**: 콜백 함수의 반환값이 true인 첫 번째 요소를 반환하고 true인 요소가 없으면 undefined를 반환한다.  
**Array.prototype.findIndex 메서드**: 콜백 함수의 반환값이 true인 첫 번째 요소의 인덱스를 반환하고 true인 요소가 없으면 -1을 반환한다.  
**Array.prototype.flatMap 메서드**: map 메서드를 통해 생성된 새로운 배열을 1단계만 평탄화한다.  

## Number
### Number 프로퍼티
**Number.EPSILON**: 1과 1보다 큰 숫자 중에서 가장 작은 숫자와의 차이와 같다.  
**Number.MAX_VALUE**: 자바스크립트에서 표현할 수 있는 가장 큰 양수 값이다.  
**Number.MIN_VALUE**: 자바스크립트에서 표현할 수 있는 가장 작은 양수 값이다.  
**Number.MAX_SAFE_INTEGER**: 자바스크립트에서 안전하게 표현할 수 있는 가장 큰 정수값이다.  
**Number.MIN_SAFE_INTEGER**: 자바스크립트에서 안전하게 표현할 수 있는 가장 작은 정수값이다.  
**Number.POSITIVE_INFINITY**: 양의 무한대를 나타내는 숫자값 Infinity와 같다.  
**Number.NEGATIVE_INFINITY**: 음의 무한대를 나타내는 숫자값 -Infinity와 같다.  

### Number 메서드
**Number.isFinite 메서드**: 인수로 전달된 숫자값을 암묵적으로 타입 변환하지 않고 정상적인 유한수인지 검사하여 불리언 값을 반환한다.  
**Number.isInteger 메서드**: 인수로 전달된 숫자값을 암묵적으로 타입 변환하지 않고 정수인지 검사하여 불리언 값을 반환한다.  
**Number.isNaN 메서드**: 인수로 전달된 숫자값을 암묵적으로 타입 변환하지 않고 NaN인지 검사하여 불리언 값을 반환한다.  
**Number.isSafeInteger 메서드**: 인수로 전달된 숫자값을 암묵적으로 타입 변환하지 않고 안전한 정수인지 검사하여 불리언 값을 반환한다.  
**Number.prototype.toExponential 메서드**: 숫자를 지수 표기법으로 변환하여 문자열로 반환한다.  
**Number.prototype.toFixed 메서드**: 숫자를 반올림하여 문자열로 반환한다.  
**Number.prototype.toPrecision 메서드**: 인수로 전달받은 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환한다.  
**Number.prototype.toString 메서드**: 진법을 나타내는 정수값을 인수로 전달하여 숫자를 문자열로 변환하여 반환한다.  

**지수 표기법**: 매우 크거나 작은 숫자를 표기할 때 주로 사용하며 e(Exponent) 앞에 있는 숫자에 10의 n승을 곱하는 형식으로 수를 나타내는 방식이다.  

## Math
표준 빌트인 객체인 Math는 수학적인 상수와 함수를 위한 프로퍼티와 메서드를 제공한다.  

### Math 메서드
**Math.abs 메서드**: 인수로 전달된 숫자의 절대값을 반환한다.  
**Math.round 메서드**: 인수로 전달된 숫자의 소수점 이하를 반올림한 정수를 반환한다.  
**Math.ceil 메서드**: 인수로 전달된 숫자의 소수점 이하를 올림한 정수를 반환한다.  
**Math.floor 메서드**: 인수로 전달된 숫자의 소수점 이하를 내림한 정수를 반환한다.  
**Math.sqrt 메서드**: 인수로 전달된 숫자의 제곱근을 반환한다.  
**Math.random 메서드**: 임의의 난수(0에서 1미만의 실수)를 반환한다.  
**Math.pow 메서드**: 첫 번째 인수를 밑<sup>base</sup>으로, 두 번째 인수를 지수<sup>exponent</sup>로 거듭제곱한 결과를 반환한다.  
**Math.max 메서드**: 전달받은 인수 중에서 가장 큰 수를 반환한다.  
**Math.min 메서드**: 전달받은 인수 중에서 가장 작은 수를 반환한다.  

## Date
표준 빌트인 객체인 Date는 날짜와 시간을 위한 메서드를 제공하는 빌트인 객체이면서 생성자 함수다.  

### Date 생성자 함수
Date 생성자 함수로 생성한 Date 객체는 내부적으로 날짜와 시간을 나타내는 정수값을 갖는데 이 값은 1970년 1월 1일 00:00:00(UTC)을 기점은 Date 객체가 나타내는 날짜와 시간까지의 밀리초를 나타낸다.  

**new Date()**: 인수 없이 new 연산자와 함께 호출하면 현재 날짜와 시간을 가지는 Date 객체를 반환한다.  
**Date()**: new 연산자 없이 호출하면 Date 객체를 반환하지 않고 날짜와 시간 정보를 나타내는 문자열을 반환한다.  
**new Date(milliseconds)**: 밀리초를 인수로 전달하면 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체를 반환한다.  
**new Date(dateString)**: 날짜와 시간을 나타내는 문자열을 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환한다.  
**new Date(year, month[, day, hour, minute, second, millisecond])**: 연, 월(0부터 시작), 일, 시, 분, 초, 밀리초를 의미하는 숫자를 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환한다.  

### Date 메서드
**Date.now 메서드**: 1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환한다.  
**Date.parse 메서드**: 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.  
**Date.UTC 메서드**: 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.  
**Date.prototype.getFullYear 메서드**: Date 객체의 연도를 나타내는 정수를 반환한다.  
**Date.prototype.setFullYear 메서드**: Date 객체에 연도를 나타내는 정수를 설정한다.  
**Date.prototype.getMonth 메서드**: Date 객체의 월을 나타내는 0 ~ 11의 정수를 반환한다.  
**Date.prototype.setMonth 메서드**: Date 객체에 월을 나타내는 0 ~ 11의 정수를 설정한다.  
**Date.prototype.getDate 메서드**: Date 객체의 날짜를 나타내는 정수를 반환한다.  
**Date.prototype.setDate 메서드**: Date 객체에 날짜를 나타내는 정수를 설정한다.  
**Date.prototype.getDay 메서드**: Date 객체의 요일(0 ~ 6)을 나타내는 정수를 반환한다.  
**Date.prototype.getHours 메서드**: Date 객체의 시간(0 ~ 23)dmf 나타내는 정수를 반환한다.  
**Date.prototype.setHours 메서드**: Date 객체에 시간을 나타내는 정수를 설정한다.  
**Date.prototype.getMinutes 메서드**: Date 객체의 분(0 ~ 59)을 나타내는 정수를 반환한다.  
**Date.prototype.setMinutes 메서드**: Date 객체에 분을 나타내는 정수를 설정한다.  
**Date.prototype.getSeconds 메서드**: Date 객체의 초(0 ~ 59)를 나타내는 정수를 반환한다.  
**Date.prototype.setSeconds 메서드**: Date 객체에 초를 나타내는 정수를 설정한다.  
**Date.prototype.getMilliseconds 메서드**: Date 객체의 밀리초(0 ~ 999)를 나타내는 정수를 반환한다.  
**Date.prototype.setMilliseconds 메서드**: Date 객체에 밀리초를 나타내는 정수를 설정한다.  
**Date.prototype.getTime 메서드**: 1970년 1월 1일 00:00:00(UTC)를 기점으로 Date 객체의 시간까지 경과된 밀리초를 반환한다.  
**Date.prototype.setTime 메서드**: Date 객체에 1970년 1월 1일 00:00:00(UTC)를 기점으로 경과된 밀리초를 설정한다.  
**Date.prototype.getTimezoneOffset 메서드**: UTC와 Date 객체에 지정된 로캘<sup>locale</sup> 시간과의 차이를 분 단위로 반환한다.  
**Date.prototype.toDateString 메서드**: 사람이 읽을 수 있는 형식의 문자열로 Date 객체의 날짜를 반환한다.  
**Date.prototype.toTimeString 메서드**: 사람이 읽을 수 있는 형식으로 Date 객체의 시간을 표현한 문자열을 반환한다.  
**Date.prototype.toISOString 메서드**: ISO 8601 형식으로 Date 객체의 날짜와 시간을 표현한 문자열을 반환한다.  
**Date.prototype.toLocaleString 메서드**: 인수로 전달된 로캘을 기준으로 Date 객체의 날짜와 시간을 표현한 문자열을 반환한다.  
**Date.prototype.toLocaleTimeString 메서드**: 인수로 전달된 로캘을 기준으로 Date 객체의 시간을 표현한 문자열을 반환한다.  

## RegExp
정규 표현식<sup>regular expression</sup>은 일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어(formal language)다.  
정규 표현식 리터럴은 패턴과 플래그로 구성된다.  
```javascript
const regexp = /is/i; // /pattern/flag
```

### RegExp 메서드
**RegExp.prototype.exec 메서드**: 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환한다.  
**RegExp.prototype.test 메서드**: 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 값으로 반환한다.  
**String.prototype.match 메서드**: 대상 문자열과 인수로 전달받은 정규 표현식과의 매칭 결과를 배열로 반환한다.  

### 플래그
|플래그|의미|설명|
|:---:|---|---|
|i|Ignore case|대소문자를 구별하지 않고 패턴을 검색한다.|
|g|Global|대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.|
|m|Multi line|문자열의 행이 바뀌더라도 패턴 검색을 계속한다.|
> *플래그는 옵션이므로 선택적으로 사용할 수 있다.*  
> *순서와 상관없이 하나 이상의 플래그를 동시에 설정할 수 있다.*  

### 패턴
패턴은 /로 열고 닫으며 문자열의 따옴표는 생략한다.  
패턴은 특별한 의미를 가지는 메타문자<sup>meta character</sup> 또는 기호로 표현할 수 있다.  

**문자열 검색**  
```javascript
// 패턴에 문자 또는 문자열을 지정하면 검색 대상 문자열에서 패턴으로 지정한 문자 또는 문자열을 검색한다.
const regExp = /is/;
```
**임의의 문자열 검색**  
```javascript
// .은 임의의 문자 한 개를 의미한다.  
// 임의의 3자리 문자열을 의미한다.
const regExp = /.../; 
```
**반복 검색**    
```javascript
// {m,n}은 앞선 패턴이 최소 m번, 최대 n번 반복되는 문자열을 의미한다.
const regExp1 = /A{1,2}/;
// 2번 반복되는 문자열을 의미한다.
const regExp2 = /A{2}/;
// 2번 이상 반복되는 문자열을 의미한다.
const regExp3 = /A{2,}/; 
// +는 앞선 패턴이 최소 한번 이상 반복되는 문자열을 의미한다.
const regExp4 = /A+/;
// ?는 앞선 패턴이 최대 한 번(0번 포함) 이상 반복되는 문자열을 의미한다.
const regExp5 = /colou?r/;
```
**OR 검색**  
```javascript
// |은 or의 의미를 갖는다.
const regExp1 = /A|B/;
// [] 내의 문자는 or로 동작한다.
const regExp2 = /[AB]/;
// 범위를 지정하려면 [] 내에 -를 사용한다.
const regExp3 = /[A-Z]/;
// \d는 숫자를 의미한다.
const regExp4 = /[\d]/;
// \D는 숫자가 아닌 문자를 의미한다.
const regExp5 = /[\D]/;
// \w는 알파벳, 숫자, 언더스코어를 의미한다.
const regExp6 = /[\w]/;
// \W는 알파벳, 숫자, 언더스코어가 아닌 문자를 의미한다.  
const regExp7 = /[\W]/;
```
**NOT 검색**  
```javascript
// [] 내의 ^은 not의 의미를 갖는다.
const regExp = /[^0-9]/;
```
**시작 위치로 검색**  
```javascript
// [] 밖은 ^은 문자열의 시작을 의미한다.
const regExp = /^https/;
```
**마지막 위치로 검색**   
```javascript
// $는 문자열의 마지막을 의미한다.
const regExp = /com$/;
```

## String
표준 빌트인 객체인 String은 원시 타입인 문자열을 다룰 때 유용한 프로퍼티와 메서드를 제공한다.  

### String 메서드
String 객체의 메서드는 언제나 새로운 문자열을 반환한다.  
문자열은 변경 불가능한 원시 값이기 때문에 String 래퍼 객체도 읽기 전용 객체로 제공된다.  

**String.prototype.indexOf 메서드**: 대상 문자열에서 인수로 전달받은 문자열을 검색하여 첫 번째 인덱스를 반환한다.  
**String.prototype.search 메서드**: 대상 문자열에서 인수로 전달받은 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다.  
**String.prototype.includes 메서드**: 대상 문자열에 인수로 전달받은 문자열이 포함되어 있는지 확인하여 그 결과를 true 또는 false로 반환한다.  
**String.prototype.startsWith 메서드**: 대상 문자열이 인수로 전달받은 문자열로 시작하는지 확인하여 그 결과를 true 또는 false로 반환한다.  
**String.prototype.endsWith 메서드**: 대상 문자열이 인수로 전달받은 문자열로 끝나는지 확인하여 그 결과를 true 또는 false로 반환한다.  
**String.prototype.charAt 메서드**: 대상 문자열에서 인수로 전달받은 인덱스에 위치한 문자를 검색하여 반환한다.  
**String.prototype.substring 메서드**: 대상 문자열에서 첫 번째 인수로 전달받은 인덱스에 위치하는 문자부터 두 번째 인수로 전달받은 인덱스에 위치하는 문자의 바로 이전 문자까지의 부분 문자열을 반환한다.  
**String.prototype.slice 메서드**: substring 메서드와 동일하게 동작하지만 음수인 인수를 전달할 수 있다.  
**String.prototype.toUpperCase 메서드**: 대상 문자열을 모두 대문자로 변경한 문자열을 반환한다.  
**String.prototype.toLowerCase 메서드**: 대상 문자열을 모두 소문자로 변경한 문자열로 반환한다.  
**String.prototype.trim 메서드**: 대상 문자열 앞뒤에 공백 문자가 있을 경우 이를 제거한 문자열을 반환한다.  
**String.prototype.repeat 메서드**: 대상 문자열을 인수로 전달받은 정수만큼 반복해 연결한 새로운 문자열을 반환한다.  
**String.prototype.replace 메서드**: 대상 문자열에서 첫 번째 인수로 전달받은 문자열 또는 정규 표현식을 검색하여 두 번째 인수로 전달한 문자열로 치환한 문자열을 반환한다.  
**String.prototype.split 메서드**: 대상 문자열에서 첫 번째 인수로 전달한 문자열 또는 정규 표현식을 검색하여 문자열을 구분한 후 분리된 각 문자열로 이루어진 배열을 반환한다.  

## Symbol
심벌<sup>symbol</sup>은 ES6에서 도입된 7번째 데이터 타입으로 변경 불가능한 원시 타입의 값이다.  
실벌 값은 다른 값과 중복되지 않는 유일무이한 값이다.  
주로 이름의 충돌 위험이 없는 유일한 프로퍼티 키를 만들기 위해 사용한다.  
심벌 값도 문자열, 숫자, 불리언과 같이 객체처럼 접근하면 암묵적으로 래퍼 객체를 생성한다.  
심벌 값은 암묵적으로 문자열이나 숫자 타입(불리언 타입은 예외)으로 변환되지 않는다.  
심벌 값을 프로퍼티 키로 사용하여 생성한 프로퍼티는 for ... in 문이나 Object.keys, Object.getOwnPropertyNames 메서드로 찾을 수 없다.  
```javascript
const mySymbol = Symbol();
// 인수로 전달받은 문자열은 생성된 심벌 값에 대한 설명으로 디버깅 용도로만 사용된다.
const mySymbol1 = Symbol('mySymbol');
const mySymbol2 = Symbol('mySymbol');

console.log(mySymbol1 === mySymbol2); // false

const obj = {
  // 심벌 값으로 프로퍼티 키를 생성
  [Symbol('mySymbol')]: 1
};

// 심벌 값으로 프로퍼티 키를 동적 생성하면 다른 프로퍼티 키와 절대 충돌하지 않아 안전하다.
Array.prototype[Symbol.for('sum')] = function () {
  return this.reduce((acc, cur) => acc + cur, 0);
};

[1, 2][Symbol.for('sum')]();
```

**Symbol.for 메서드**: 인수로 전달받은 문자열을 키로 사용하여 키와 심벌 값의 쌍들이 저장되어 있는 전역 심벌 레지스트리<sup>global symbol registry</sup>에서 해당 키와 일치하는 심벌 값을 검색한다.  
- 검색에 성공하면 새로운 심벌 값을 생성하지 않고 검색된 심벌 값을 반환한다.  
- 검색에 실패하면 새로운 심벌 값을 생성하여 Symbol.for 메서드의 인수로 전달된 키로 전역 심벌 레지스트리에 저장한 후, 생성된 심벌 값을 반환한다.  

**Symbol.keyFor 메서드**: 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출할 수 있다.  

## Iterable
### 이터레이션 프로토콜<sup>iteration protocol</sup>
ES6에서 도입된 이터레이션 프로토콜은 순회 가능한 데이터 컬렉션(자료구조)을 만들기 위해 ECMAScript 사양에 정의하여 미리 약속한 규칙이다.  
다양한 데이터 공급자가 하나의 순회 방식을 갖도록 규정하여 데이터 소비자가 효율적으로 다양한 데이터 공급자를 사용할 수 있도록 데이터 소비자와 데이터 공급자를 연결하는 인터페이스의 역할을 한다.  
이터레이션 프로토콜에는 이터러블 프로토콜과 이터레이터 프로토콜이 있다.  

- **이터러블 프로토콜<sup>iterable protocol</sup>**  
Well-Known Symbol인 Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속 받은 Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다. 이러한 규약을 이터러블 프로토콜이라 하여, 이터러블 프로토콜을 준수한 객체를 이터러블이라 한다. 이터러블은 for ... of 문으로 순회할 수 있으며 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.  

- **이터레이터 프로토콜<sup>iterator protocol</sup>**  
이터러블의 Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다. 이터레이터는 next 메서드를 소유하며 next 메서드를 호출하면 이터러블을 순회하며 value와 done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환한다. 이러한 규약을 이터레이터 프로토콜이라 하며, 이터레이터 프로토콜을 준수한 객체를 이터레이터라 한다. 이터레이터는 이터러블의 요소를 탐색하기 위한 포인터 역할을 한다.  

### 이터러블
이터러블 프로토콜을 준수한 객체를 이터러블이라 한다.  
이터러블은 Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속받은 객체를 말한다.  
이터러블은 for ... of 문, 스프레드 문법, 배열 디스트럭처링 할당과 같은 데이터 소비자<sup>data consumer</sup>에 의해 사용되므로 데이터 공급자<sup>data provider</sup>의 역할을 한다고 할 수 있다.  
```javascript
const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';
```

### 이터레이터
이터러블의 Symbol.iterator 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다.  
이터러블의 Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를 갖는다.  
이터레이터의 next 메서드는 이터러블의 각 요소를 순회하기 위한 포인터의 역할을 한다.  
next 메서드를 호출하면 이터러블을 순차적으로 한 단계씩 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를 반환한다.  
이터레이터의 next 메서드가 반환하는 이터레이터 리절트 객체의 value 프로퍼티는 현재 순회 중인 이터러블의 값을 나타내며 done 프로퍼티는 이터러블의 순회 완료 여부를 나타낸다.  
```javascript
const array = [1, 2, 3];

const iterator = array[Symbol.iterator]();

console.log('next' in iterator);

console.log(iterator.next());
```

**이터러블이면서 이터레이터인 객체**  
이터러블이면서 이터레이터인 객체를 생성하면 Symbol.iterator 메서드를 호출하지 않아도 된다.  
이터레이터를 반환하는 Symbol.iterator 메서드와 이터레이션 리절트 객체를 반환하는 next 메서드를 소유한다.  
Symbol.iterator 메서드는 this를 반환하므로 next 메서드를 갖는 이터레이터를 반환한다.  
```javascript
{
  [Symbol.iterator]() { return this; },
  next() {
    return { value: any, done: boolean };
  }
}
```

### 빌트인 이터러블
|빌트인 이터러블|Symbol.iterator 메서드|
|---|---|
|Array|Array.prototype[Symbol.iterator]|
|String|String.prototype[Symbol.iterator]|
|Map|Map.prototype[Symbol.iterator]|
|Set|Set.prototype[Symbol.iterator]|
|TypeArray|TypeArray.prototype[Symbol.iterator]|
|arguments|arguments[Symbol.iterator]|
|DOM 컬렉션|NodeList.prototype[Symbol.iterator]<br>HTMLCollection.prototype[Symbol.iterator]|

### for ... of 문
for ... of 문은 이터러블을 순회하면서 이터러블의 요소를 변수에 할당한다.  
for ... of 문은 내부적으로 이터레이터의 next 메서드를 호출하여 이터러블을 순회하며 next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티 값을 for ... of 문의 변수에 할당한다.  
이터레이터 리절트 객체의 done 프로퍼티 값이 false이면 이터러블의 순회를 계속하고 true이면 이터러블의 순회를 중단한다.  
```javascript
for (변수선언문 of 이터러블) { ... }
```

**지연 평가<sup>lazy evaluation</sup>**: 데이터가 필요한 시점 이전까지는 미리 데이터를 생성하지 않다가 데이터가 필요한 시점이 되면 그때야 비로소 데이터를 생성하는 기법이다.  

## 스프레드 문법
ES6에서 도입된 스프레드 문법<sup>spread syntax</sup>(전개 문법) ...은 하나로 뭉쳐 있는 여러 값들의 집합을 펼쳐서 개별적인 값들의 목록으로 만든다.  
스프레드 문법을 사용할 수 있는 대상은 for ... of 문으로 순회할 수 있는 이터러블에 한정된다.  
스프레드 문법의 결과는 값이 아니므로 변수에 할당할 수 없다.  
쉼표로 구분한 값의 목록을 사용하는 문맥에서만 사용할 수 있다.  
- 함수 호출문의 인수 목록
- 배열 리터럴의 요소 목록
- 객체 리터럴의 프로퍼티 목록

> *Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받기 위해서 매개변수 이름 앞에 ...을 붙이는 것이다.*  
> *스프레드 문법은 여러 개의 값이 하나로 뭉쳐 있는 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만드는 것이다.*  

## 디스트럭처링 할당
디스트럭처링 할당<sup>destructuring assignment</sup>(구조 분해 할당)은 구조화된 배열과 같은 이터러블 또는 객체를 destructuring(비구조화, 구조 파괴)하여 1개 이상의 변수에 개별적으로 할당하는 것을 말한다.  

### 배열 디스트럭처링 할당
ES5에서 구조화된 배열을 디스트럭처링하여 1개 이상의 변수에 할당한다.  
ES6의 배열 디스트럭처링 할당은 배열의 각 요소를 배열로부터 추출하여 1개 이상의 변수에 할당한다.  
배열 디스트럭처링 할당의 대상(할당문의 우변)은 이터러블이어야 하며, 할당 기준은 배열의 인덱스다.  
```javascript
const arr = [1, 2, 3];

// ES5
var one = arr[0];
var two = arr[1];
var three = arr[2];

// ES6
const [one, two, three] = arr;
```

### 객체 디스트럭처링 할당
ES5에서 객체의 각 프로퍼티를 객체로부터 디스트럭처링하여 변수에 할당하기 위해서는 프로퍼티 키를 사용해야 한다.  
ES6의 객체 디스트럭처링 할당은 객체의 각 프로퍼티를 객체로부터 추출하여 1개 이상의 변수에 할당한다.  
객체 디스트럭처링 할당의 대상(할당문의 우변)은 객체이어야 하며, 할당 기준은 프로퍼티 키다.  
```javascript
const user = { firstName: 'Ungmo', lastName: 'Lee' };

// ES5
var firstName = user.firstName;
var lastName = user.lastName;

// ES6
const { lastName, firstName } = user;
// 위와 아래는 동치다.
const { lastName: lastName, firstName: firstName } = user;
```

## Set
Set 객체는 중복되지 않는 유일한 값들의 집합<sup>set</sup>이다. 
|구분|배열|Set 객체|
|---|:---:|:---:|
|동일한 값을 중복하여 포함할 수 있다.|Ο|Χ|
|요소 순서에 의미가 있다.|Ο|Χ|
|인덱스로 요소에 접근할 수 있다.|Ο|Χ|

**Set 객체의 생성**  
Set 생성자 함수는 이터러블을 인수로 전달 받아 Set 객체를 생성하고 이때 이터러블의 중복된 값은 Set 객체에 요소로 저장되지 않는다.  
```javascript
const set = new Set([1, 2, 3, 3]);
console.log(set); // Set(3) {1, 2, 3}
```

**Set.prototype.size 프로퍼티**: Set 객체의 요소 개수를 확인한다.  
**Set.prototype.add 메서드**: Set 객체에 요소를 추가할 때 사용하며 연속적으로 호출할 수 있다.  
**Set.prototype.has 메서드**: Set 객체에 특정 요소가 존재하는지 확인할 때 사용하며 불리언 값을 반환한다.  
**Set.prototype.delete 메서드**: Set 객체의 특정 요소를 삭제하고 삭제 성공 여부를 불리언 값으로 반환한다.  
**Set.prototype.clear 메서드**: Set 객체의 모든 요소를 일괄 삭제하고 언제나 undefined를 반환한다.  
**Set.prototype.forEach 메서드**: Set 객체의 요소를 순회할 때 사용하며 콜백 함수와 콜백 함수 내부에 3개의 인수를 전달한다.  

### 집합 연산
Set 객체는 수학적 집합을 구현하기 위한 자료구조다.  

**교집합**  
```javascript
Set.prototype.intersection = function (set) {
  return new Set([...this].filter(v => set.has(v)));
};
```

**합집합**
```javascript
Set.prototype.union = function (set) {
  return new Set([...this, ...set]);
};
```  

**차집합**
```javascript
Set.prototype.difference = function (set) {
  return new Set([...this].filter(v => !set.has(v)));
};
```

**부분 집합과 상위 집합**
```javascript
Set.prototype.isSuperset = function (subset) {
  const supersetArr = [...this];
  return [...subset].every(v => supersetArr.includes(v));
};
```

## Map
Map 객체는 키와 값의 쌍으로 이루어진 컬렉션이다.  
<table>
  <thead>
    <tr>
      <th align="center">구분</th>
      <th align="center">객체</th>
      <th align="center">Map 객체</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">키로 사용할 수 있는 값</td>
      <td align="left">문자열 또는 심벌 값</td>
      <td align="left">객체를 포함한 모든 값</td>
    </tr>
    <tr>
      <td align="left">이터러블</td>
      <td align="center">Χ</td>
      <td align="center">Ο</td>
    </tr>
    <tr>
      <td align="left">요소 개수 확인</td>
      <td align="left">Object.keys(obj).length</td>
      <td align="left">map.size</td>
    </tr>
  </tbody>
</table>

**Map 객체의 생성**  
Map 생성자 함수는 이터러블을 인수로 전달받아 Map 객체를 생성하고 이때 인수로 전달되는 이터러블은 키와 값의 쌍으로 이루어진 요소로 구성되어야 한다.  
Map 생성자 함수의 인수로 전달한 이터러블에 중복된 키를 갖는 요소가 존재하면 값이 덮어써진다.  
```javascript
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map); // Map(2) {"key1" => "value1", "key2" => "value2"}
```  

**Map.prototype.size 프로퍼티**: Map 객체의 요소 개수를 확인한다.  
**Map.prototype.set 메서드**: Map 객체에 요소를 추가할 때 사용하며 연속적으로 호출할 수 있다.  
**Map.prototype.get 메서드**: Map 객체에서 특정 요소를 취득할 때 사용하며 인수에 키를 전달하면 인수로 전달한 키를 갖는 값을 반환한다.  
**Map.prototype.has 메서드**: Map 객체에 특정 요소가 존재하는 확인할 때 사용하며 존재 여부를 나타내는 불리언 값을 반환한다.  
**Map.prototype.delete 메서드**: Map 객체의 요소를 삭제할 때 사용하며 삭제 성공 여부를 나타내는 불리언 값을 반환한다.  
**Map.prototype.clear 메서드**: Map 객체의 요소를 일괄 삭제할 때 사용하며 언제나 undefined를 반환한다.  
**Map.prototype.forEach 메서드**: Map 객체의 요소를 순회할 때 사용하며 콜백 함수와 콜백 함수 내부에 3개의 인수를 전달한다.  
**Map.prototype.keys 메서드**: Map 객체에서 요소키를 값으로 갖는 이터러블이면서 동시에 이터레이터인 객체를 반환한다.  
**Map.prototype.values 메서드**: Map 객체에서 요소값을 값으로 갖는 이터러블이면서 동시에 이터레이터인 객체를 반환한다.  
**Map.prototype.entries 메서드**: Map 객체에서 요소키와 요소값을 값으로 갖는 이터러블이면서 동시에 이터레이터인 객체를 반환한다.  

## 브라우저의 렌더링 과정
브라우저는 다음과 같은 과정을 거쳐 렌더링을 수행한다.  
1. 브라우저는 HTML, CSS, 자바스크립트, 이미지, 폰트 파일 등 렌더링에 필요한 리소스를 요청하고 서버로부터 응답을 받는다.  
2. 브라우저의 렌더링 엔진은 서버로부터 응답된 HTML과 CSS를 파싱하여 DOM과 CSSOM을 생성하고 이들을 결합하여 렌더 트리를 생성한다.  
3. 브라우저의 자바스크립트 엔진은 서버로부터 응답된 자바스크립트를 파싱하여 AST<sup>Abstract Syntax Tree</sup>를 생성하고 바이트코드로 변환하여 실행한다. 이때 자바스크립트는 DOM API를 통해 DOM이나 CSSOM을 변경할 수 있다. 변경된 DOM과 CSSOM은 다시 렌더 트리로 결합된다. 
4. 렌더 트리를 기반으로 HTML 요소의 레이아웃(위치와 크기)을 계산하고 브라우저 화면에 HTML 요소를 페인팅한다.  
<p align="center">
  <img src="https://user-images.githubusercontent.com/40534414/148952952-69d4f9f0-5253-47f2-8cd8-a9ea4c01cbb9.png">
</p>

**파싱<sup>parsing</sup>**  
파싱(구문 분석<sup>syntax analysis</sup>)은 프로그래밍 언어의 문법에 맞게 작성된 텍스트 문서를 읽어 들여 실행하기 위해 텍스트 문서의 문자열을 토큰으로 분해(어휘 분석<sup>lexical analysis</sup>)하고, 토큰에 문법적 의미와 구조를 반영하여 트리 구조의 자료구조인 파스 트리<sup>parse tree/syntax tree</sup>를 생성하는 일련의 과정을 말한다. 일반적으로 파싱이 완료된 이후에는 파스 트리를 기반으로 중간 언어<sup>intermediate code</sup>인 바이트코드를 생성하고 실행한다.  

**렌더링<sup>rendering</sup>**  
렌더링은 HTML, CSS, 자바스크립트로 작성된 문서를 파싱하여 브라우저에 시각적으로 출력하는 것을 말한다.  

### 요청과 응답
브라우저의 핵심 기능은 필요한 리소스(HTML, CSS, 자바스크립트, 이미지, 폰트 등의 정적 파일 또는 서버가 동적으로 생성한 데이터)를 서버에 요청<sup>request</sup>하고 서버로부터 응답<sup>response</sup>받아 브라우저에 시각적으로 렌더링한다.  
서버에 요청을 전송하기 위해 브라우저는 주소창을 제공한다. 브라우저의 주소창에 URL을 입력하고 엔터 키를 누르면 URL의 호스트 이름이 DNS를 통해 IP 주소로 변환되고 이 IP 주소를 갖는 서버에게 요청을 전송한다.  
<p align="center">
  <img src="https://user-images.githubusercontent.com/40534414/148959988-2115cb45-b9a4-4006-b090-d765a05d4586.png">
</p>
  
### HTTP 1.1과 HTTP 2.0
HTTP<sup>HyperText Transfer Protocol</sup>는 웹에서 브라우저와 서버가 통신하기 위한 프로토콜이다.  
HTTP/1.1은 기본적으로 커넥션<sup>connection</sup>당 하나의 요청과 응답만 처리한다.  
HTTP/2.0은 커넥션당 여러 개의 요청과 응답, 즉 다중 요청/응답이 가능하다.  
<p align="center">
  <img src="https://user-images.githubusercontent.com/40534414/149084933-7f2b0686-e226-45b2-b092-3d1a21c09983.png">
  <img src="https://user-images.githubusercontent.com/40534414/149084949-56873cb6-ee04-4373-abd3-dde5dc6f6024.png">
</p>
  
### HTML 파싱과 DOM 생성
브라우저의 렌더링 엔진은 응답받은 HTML 문서를 파싱하여 브라우저가 이해할 수 있는 자료구조인 DOM<sup>Document Object Model</sup>을 생성한다.  
<p align="center">
  <img src="https://user-images.githubusercontent.com/40534414/149338518-70b951de-b375-457b-9b8d-55e03543852e.png">
</p>

1. 서버에 존재하던 HTML 파일이 브라우저의 요청에 의해 응답된다. 이때 서버는 브라우저가 요청한 HTML 파일을 읽어 들여 메모리에 저장한 다음 메모리에 저장된 바이트(2진수)를 인터넷을 경유하여 응답한다.  
2. 브라우저는 서버가 응답한 HTML 문서를 바이트(2진수) 형태로 응답받는다. 그리고 응답된 바이트 형태의 HTML 문서는 meta 태그의 charset 어트리뷰트에 의해 지정된 인코딩 방식을 기준으로 문자열로 변환된다.  
3. 문자열로 변환된 HTML 문서를 읽어 들여 문법적 의미를 갖는 코드의 최소 단위인 토큰들로 분해한다.  
4. 각 토큰들을 객체로 변환하여 노드들을 생성한다. 토큰의 내용에 따라 문서 노드, 요소 노드, 어트리뷰트 노드, 텍스트 노드가 생성된다. 노드는 이후 DOM을 구성하는 기본 요소가 된다.  
5. HTML 문서는 HTML 요소들의 집합으로 이루어지며 HTML 요소는 중첩 관계를 갖는다. 즉, HTML 요소의 콘텐츠 영역(시작 태그와 종료 태그 사이)에는 텍스트뿐만 아니라 다른 HTML 요소도 포함될 수 있다. 이때 HTML 요소 간에는 중첩 관계에 의해 부자 관계가 형성된다. 이러한 HTML 요소 간의 부자 관계를 반영하여 모든 노드들을 트리 자료구조로 구성한다. 이 노드들로 구성된 트리 자료구조를 DOM이라 부른다.  

### CSS 파싱과 CSSOM 생성
렌더링 엔진은 DOM을 생성해 나가다가 CSS를 로드하는 link 태그나 style 태그를 만나면 DOM 생성을 일시 중단하고 link 태그의 href 어트리뷰트에 지정된 CSS 파일을 서버에 요청하여 로드한 CSS 파일이나 style 태그 내의 CSS를 HTML과 동일한 파싱 과정(바이트 → 문자 → 토큰 → 노드 → CSSOM)을 거치며 해석하여 CSSOM<sup>CSS Object Model</sup>을 생성한다.  

### 렌더 트리 생성
렌더링 엔진은 서버로부터 응답된 HTML과 CSS를 파싱하여 각각 DOM과 CSSOM를 생성하고 DOM과 CSSOM은 렌더링을 위해 렌더 트리<sup>render tree</sup>로 결합한다.  
렌더 트리는 렌더링을 위한 트리 구조의 자료구조이고 브라우저 화면에 렌더링되는 노드만으로 구성된다.  
완성된 렌더 트리는 각 HTML 요소의 레이아웃(위치, 크기)을 계산하는 데 사용되며 브라우저 화면에 픽셀을 렌더링하는 페인팅<sup>painting</sup> 처리에 입력된다.  
<p align="center">
  <img src="https://user-images.githubusercontent.com/40534414/149624849-d207da1f-3630-4650-9df7-e572f0487afa.png">
</p>

> *다음과 같은 경우 반복해서 레이아웃 계산과 페인팅이 재차 실행된다.*  
> - *자바스크립트에 의한 노드 추가 또는 삭제*
> - *브라우저 창의 리사이징에 의한 뷰포트<sup>viewport</sup> 크기 변경*
> - *HTML 요소의 레이아웃(위치, 크기)에 변경을 발생시키는 width/height, margin, padding, border, display, position, top/right/bottom/left 등의 스타일 변경*

### 자바스크립트 파싱과 실행
자바스크립트 파싱과 실행은 브라우저의 렌더링 엔진이 아닌 자바스크립트 엔진이 처리한다.  
자바스크립트 엔진은 자바스크립트 코드를 파싱하여 CPU가 이해할 수 있는 저수준 언어<sup>low-level language</sup>로 변환하고 실행하는 역할을 한다.  
자바스크립트 엔진은 자바스크립트를 해석하여 AST<sup>Abstract Syntax Tree</sup>(추상적 구문 트리)를 생성하고 AST를 기반으로 인터프리터가 실행할 수 있는 중간 코드<sup>intermediate code</sup>인 바이트코드를 생성하여 실행한다.  
<p align="center">
  <img src="https://user-images.githubusercontent.com/40534414/149661660-93fecdd4-94da-47eb-aecd-8673afec390f.png">
</p>

**토크나이징<sup>tokenizing</sup>**  
단순한 문자열인 자바스크립트 소스코드를 어휘 분석<sup>lexical analysis</sup>하여 문법적 의미를 갖는 코드의 최소 단위인 토큰들로 분해한다. 이 과정을 렉싱<sup>lexing</sup>이라고 부르기도 하지만 토크나이징과 미묘한 차이가 있다.  

**파싱<sup>parsing</sup>**  
토큰들의 집합을 구문 분석<sup>syntactic analysis</sup>하여 AST를 생성한다. AST는 토큰에 문법적 의미와 구조를 반영한 트리 구조의 자료구조다. AST는 인터프리터나 컴파일러만이 사용하는 것은 아니다. AST를 사용하면 TypeScript, Babel, Prettier 같은 트랜스파일러<sup>transpiler</sup>를 구현할 수도 있다.  

### 리플로우와 리페인트
리플로우와 리페인트가 반드시 순차적으로 동시에 실행되는 것은 아니다.  
레이아웃에 영향이 없는 변경은 리플로우 없이 리페인트만 실행된다.  

**리플로우<sup>reflow</sup>**  
레이아웃 계산을 다시 하는 것을 말하며, 노드 추가/삭제, 요소의 크기/위치 변경, 윈도우 리사이징 등 레이아웃에 영향을 주는 변경이 발생한 경우에 한하여 실행된다.  

**리페인트<sup>repaint</sup>**  
리페인트는 재결합된 렌더 트리를 기반으로 다시 페인트를 하는 것을 말한다.  

### 자바스크립트 파싱에 의한 HTML 파싱 중단
렌더링 엔진과 자바스크립트 엔진은 병렬적으로 파싱을 실행하지 않고 직렬적으로 파싱을 수행한다.  
script 태그의 위치에 따라 HTML 파싱이 블로킹되어 DOM 생성이 지연될 수 있기 때문에 script 태그의 위치는 중요한 의미를 갖는다.  
아래와 같은 이유로 body 요소의 가장 아래에 자바스크립트를 위치시키는 것이 좋다.  
- DOM이 완성되지 않은 상태에서 자바스크립트가 DOM을 조작하면 에러가 발생할 수 있다.
- 자바스크립트 로딩/파싱/실행으로 인해 HTML 요소들의 렌더링에 지장받는 일이 발생하지 않아 페이지 로딩 시간이 단축된다.  

### script 태그의 async/defer 어트리뷰트
자바스크립트 파싱에 의한 DOM 생성이 중단<sup>blocking</sup>되는 문제를 근본적으로 해결하기 위해 HTML5부터 script 태그에 async와 defer 어트리뷰트가 추가되었다.  
async와 defer 어트리뷰트를 사용하면 HTML 파싱과 외부 자바스크립트 파일의 로가 비동기적<sup>asynchronous</sup>으로 동시에 진행된다.  
```html
<script async src="example.js"></script>
<script defer src="example.js"></script>
```

**async 어트리뷰트**  
자바스크립트의 파싱과 실행은 자바스크립트 파일의 로드가 완료된 직후 진행되며, 이때 HTML 파싱이 중단된다.  
여러 개의 script 태그에 async 어트리뷰트를 지정하면 script 태그의 순서와는 상관없이 로드가 완료된 자바스크립트부터 먼저 실행되므로 순서가 보장되지 않는다.  
<p align="center">
  <img src="https://user-images.githubusercontent.com/40534414/150136090-d7fa2f97-8113-4d65-8dac-af2c4976f403.png">
</p>

**defer 어트리뷰트**  
자바스크립트의 파싱과 실행은 HTML 파싱이 완료된 직후, 즉 DOM 생성이 완료된 직후(이때 DOMContentLoaded 이벤트가 발생한다) 진행된다.  
DOM 생성이 완료된 이후 실행되어야 할 자바스크립트에 유용하다.  
<p align="center">
  <img src="https://user-images.githubusercontent.com/40534414/150136771-f0987b28-a37b-4989-8ae4-a35d606004b7.png">
</p>

## DOM
DOM<sup>Document Object Model</sup>은 HTML 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조다.  
DOM을 구성하는 노드 객체는 ECMAScript 사양에 정의된 표준 빌트인 객체<sup>standard built-in objects</sup>가 아니라 브라우저 환경에서 추가적으로 제공하는 호스트 객체다.  
DOM은 HTML 문서의 계층적 구조와 정보를 표현하는 것은 물론 노드 객체의 종류, 즉 노드 타입에 따라 필요한 기능을 프로퍼티와 메서드의 집합인 DOM API<sup>Application Programming Interface</sup> 로 제공한다. 

### 노드
HTML 요소<sup>HTML element</sup>는 HTML 문서를 구성하는 개별적인 요소를 의미한다.  
HTML 요소는 렌더링 엔진에 의해 파싱되어 DOM을 구성하는 요소 노드 객체로 변환된다.  
HTML 요소의 어트리뷰트는 어트리뷰트 노드로, HTML 요소의 텍스트 콘텐츠는 텍스트 노드로 변환된다.  
<p align="center">
  <img src="https://user-images.githubusercontent.com/40534414/150340473-18ffdd99-5c4b-4634-8fbd-557219a5da8a.png" width="630">
  <img src="https://user-images.githubusercontent.com/40534414/150340480-b48d437f-631d-4dd2-96b2-87d6da6ff691.png" width="332">
</p>

**트리 자료구조<sup>tree data structure</sup>**  
트리 자료구조는 부모 노드<sup>parent node</sup>와 자식 노드<sup>child node</sup>로 구성되어 노드 간의 계층적 구조(부자, 형제 관계)를 표현하는 비선형 자료구조를 말한다. 트리 자료구조는 하나의 최상위 노드에서 시작한다. 최상위 노드는 부모 노드가 없으며, 루트 노드<sup>root node</sup>라 한다. 루트 노드는 0개 이상의 자식 노드를 갖는다. 자식 노드가 없는 노드를 리프 노드<sup>leaf node</sup>라 한다.  
> *비선형<sup>nonlinear</sup> 자료구조는 하나의 자료 뒤에 여러 개의 자료가 존재할 수 있는 자료구조다. (e.g. 트리, 그래프)*  
> *선형<sup>linear</sup> 자료구조는 하나의 자료 뒤에 하나의 자료만 존재하는 자료구조다. (e.g. 배열, 스택, 큐, 링크드 리스트, 해시 테이블)*  

**문서 노드<sup>document node</sup>**  
문서 노드는 DOM 트리의 최상위에 존재하는 루트 노드로서 document 객체를 가리킨다. document 객체는 브라우저가 렌더링한 HTML 문서 전체를 가리키는 객체로서 전역 객체 window의 document 프로퍼티에 바인딩되어 있다. document 객체는 DOM 트리의 루트 노드이므로 DOM 트리의 노드들에 접근하기 위한 진입점<sup>entry point</sup> 역할을 담당한다. 즉, 요소, 어트리뷰트, 텍스트 노드에 접근하려면 문서 노드를 통해야 한다.  

**요소 노드<sup>element node</sup>**
요소 노드는 HTML 요소를 가리키는 객체다. 요소 노드는 HTML 요소 간의 중첩에 의해 부자 관계를 가지며 이 부자 관계를 통해 정보를 구조화한다. 따라서 요소 노드는 문서의 구조를 표현한다고 할 수 있다.  

**어트리뷰트 노드<sup>attribute node</sup>**  
어트리뷰트 노드는 HTML 요소의 어트리뷰트를 가리키는 객체다. 어트리뷰트 노드는 어트리뷰트가 지정된 HTML 요소의 요소 노드와 연결되어 있다. 단, 요소 노드는 부모 노드와 연결되어 있지만 어트리뷰트 노드는 부모 노드와 연결되어 있지 않고 요소 노드에만 연결되어 있다. 즉, 어트리뷰트 노드는 부모 노드가 없으므로 요소 노드의 형제<sup>sibling</sup> 노드는 아니다. 따라서 어트리뷰트 노드에 접근하여 어트리뷰트를 참조하거나 변경하려면 먼저 요소 노드에 접근해야 한다.  

**텍스트 노드<sup>text node</sup>**  
텍스트 노드는 HTML 요소의 텍스트를 가리키는 객체다. 요소 노드가 문서의 구조를 표현한다면 텍스트 노드는 문서의 정보를 표현한다고 할 수 있다. 텍스트 노드는 요소 노드의 자식 노드이며, 자식 노드를 가질 수 없는 리프 노드<sup>leaf node</sup>다. 즉, 텍스트 노드는 DOM 트리의 최종단이다. 따라서 텍스트 노드에 접근하려면 먼저 부모 노드인 요소 노드에 전급해야 한다.  

**노드 객체의 상속 구조**  
노드 객체도 자바스크립트 객체이므로 프로토타입에 의한 상속 구조를 갖느다.  
노드 객체에는 노드 객체의 종류, 즉 노드 타입에 상관없이 모든 노드 객체가 공통으로 갖는 기능도 있고, 노드 타입에 따라 고유한 기능도 있다.  
<p align="center">
  <img src="https://user-images.githubusercontent.com/40534414/150641637-a2ed5cde-f25e-44dd-9ac6-2bba537b0d30.png" height="343">
  <img src="https://user-images.githubusercontent.com/40534414/150641775-92608ac2-1e1f-436e-ad63-ee862c27f160.png" height="343">
</p>

### 요소 노드 취득
HTML의 구조나 내용 또는 스타일 등을 동적으로 조작하려면 먼저 요소 노드를 취득해야 한다.  
요소 노드의 취득은 HTML 요소를 조작하는 시작점이다.  

**id를 이용한 요소 노드 취득**  
Document.prototype.getElementById 메서드는 인수로 전달한 id 어트리뷰트 값을 갖는 하나의 요소 노드를 탐색하여 반환한다.  
id 값은 HTML 문서 내에서 유일한 값이어야 하며, class 어트리뷰트와는 달리 공백 문자로 구분하여 여러 개의 값을 가질 수 없다.  
getElementById 메서드는 인수로 전달된 id 값을 갖는 첫 번째 요소 노드만 반환한다.  
인수로 전달된 id 값을 갖는 HTML 요소가 존재하지 않는 경우 getElementById 메서드는 null을 반환한다.  
HTML 요소에 id 어트리뷰트를 부여하면 id 값과 동일한 이름의 전역 변수가 암묵적으로 선언되고 해당 노드 객체가 할당되는 부수 효과가 있다.  
id 값과 동일한 이름의 전역 변수가 이미 선언되어 있으면 이 전역 변수에 노드 객체가 재할당되지 않는다.  
```html
<!DOCTYPE html>
<html>
  <body>
    <div id="foo"></div>
    <div id="boo"></div>
    <script>
      let foo = 1;
      // id 값과 동일한 이름의 전역 변수가 이미 선언되어 있으면 노드 객체가 재할당되지 않는다.
      console.log(foo); // 1
      
      // id 값과 동일한 이름의 전역 변수가 암묵적으로 선언되고 해당 노드 객체가 할당된다.  
      console.log(boo === document.getElementById('boo')); // true     
      // 암묵적 전역으로 생성된 전역 프로퍼티는 삭제되지만 전역 변수는 삭제되지 않는다.  
      delete boo;
      console.log(boo); // <div id="boo"></div>
    </script>
  </body>
</html>
```

**태그 이름을 이용한 요소 노드 취득**  
Document.prototype/Element.prototype.getElementsByTagName 메서드는 인수로 전달한 태그 이름을 갖는 모든 요소 노드들을 탐색하여 반환한다.  
getElementsByTagName 메서드가 반환하는 DOM 컬렉션 객체인 HTMLCollection 객체는 유사 배열 객체이면서 이터러블이다.  
인수로 전달된 태그 이름을 갖는 요소가 존재하지 않는 경우 getElementsByTagName 메서드는 빈 HTMLCollection 객체를 반환한다.  
```html
<!DOCTYPE html>
<html>
  <body>
    <ul id="fruits">
      <li>Apple</li>
      <li>Banana</li>
      <li>Orange</li>
    </ul>
    <ul>
      <li>HTML</li>
    </ul>
    <script>
      // DOM 전체에서 태그 이름이 li인 요소 노드를 모두 탐색하여 반환한다. 
      const $lisFromDocument = document.getElementsByTagName('li');
      console.log($lisFromDocument); // HTMLCollection(4) [li, li, li, li]
      
      // ul#fruits 요소의 자손 노드 중에서 태그 이름이 li인 요소 노드를 모두 탐색하여 반환한다.
      const $fruits = document.getElementById('fruits');
      const $lisFromFruits = $fruits.getElementsByTagName('li');
      console.log($lisFromFruits); // HTMLCollection(3) [li, li, li]
    </script>
  </body>
</html>
```

**class를 이용한 요소 노드 취득**  
Document.prototype/Element.prototype.getElementByClassName 메서드는 인수로 전달한 class 어트리뷰트 값을 갖는 모든 요소 노드들을 탐색하여 반환한다.  
인수로 전달할 class 값은 공백으로 구분하여 여러 개의 class를 지정할 수 있다.  
getElementsByClassName 메서드는 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 HTMLCollection 객체를 반환한다.  
인수로 전달된 class 값을 갖는 요소가 존재하지 않는 경우 getElementByClassName 메서드는 빈 HTMLCollection 객체를 반환한다.  
```html
<!DOCTYPE html>
<html>
  <body>
    <ul id="fruits">
      <li class="apple">Apple</li>
      <li class="banana">Banana</li>
      <li class="orange">Orange</li>
    </ul>
    <div class="banana">Banana</div>
    <script>
      // DOM 전체에서 class 값이 'banana'인 요소 노드를 모두 탐색하여 반환한다.
      const $bananasFromDocument = document.getElementsByClassName('banana');
      console.log($bananasFromDocument); // HTMLCollection(2) [li.banana, div.banana]
      
      // #fruits 요소의 자손 노드 중에서 class 값이 'banana'인 요소 노드를 모두 탐색하여 반환한다.
      const $fruits = document.getElementById('fruits');
      const $bananasFromFruits = $fruits.getElementsByClassName('banana');
      console.log($bananasFromFruits); // HTMLCollection [li.banana]
    </script>
  </body>
</html>
```

**CSS 선택자를 이용한 요소 노드 취득**  
Document.prototype/Element.prototype.querySelector 메서드는 인수로 전달한 CSS 선택자를 만족시키는 하나의 요소 노드를 탐색하여 반환한다.  
인수로 전달한 CSS 선택자를 만족시키는 요소 노드가 여러 개인 경우 첫 번째 요소 노드만 반환한다.  
인수로 전달된 CSS 선택자를 만족시키는 요소 노드가 존재하지 않는 경우 null을 반환한다.  
인수로 전달한 CSS 선택자가 문법에 맞지 않는 경우 DOMException 에러가 발생한다.  

Document.prototype/Element.prototype.querySelectorAll 메서드는 인수로 전달한 CSS 선택자를 만족시키는 모든 요소 노드를 탐색하여 반환한다.  
querySelectorAll 메서드는 여러 개의 요소 노드 객체를 갖는 DOM 컬렉션 객체인 NodeList 객체를 반환한다.  
인수로 전달된 CSS 선택자를 만족시키는 요소가 존재하지 않는 경우 빈 NodeList 객체를 반환한다.  
인수로 전달한 CSS 선택자가 문법에 맞지 않는 경우 DOMException 에러가 발생한다.  

> *id 어트리뷰트가 있는 요소 노드를 취득하는 경우에는 getElementById 메서드를 사용하고 그 외의 경우에는 querySelector, querySelectorAll 메서드를 사용하는 것을 권장한다.*  

**HTMLCollection과 NodeList**  
HTMLCollection과 NodeList는 모두 유사 배열 객체이면서 이터러블이다.  
for ... of 문으로 순회할 수 있으며 스프레드 문법을 사용하여 간단히 배열로 변환할 수 있다.  
노드 객체의 상태 변경과 상관없이 안전하게 DOM 컬렉션을 사용하려면 HTMLCollection이나 NodeList 객체를 배열로 변환하여 사용하는 것을 권장한다.  

**HTMLCollection**  
getElementsByTagName, getElementsByClassName 메서드가 반환하는 노드 객체의 상태 변화를 실시간으로 반영하는 살아 있는 DOM 컬렉션 객체다.  
HTMLCollection 객체는 실시간으로 노드 객체의 상태 변경을 반영하여 요소를 제거할 수 있기 때문에 HTMLCollection 객체를 for 문으로 순회하면서 노드 객체의 상태를 변경해야 할 때 주의해야한다.  
```javascript
// for 문을 역방향으로 순회
for (let i = $elems.length - 1; i >= 0; i--) {
  $elems[i].className = 'blue';
}

// while 문으로 HTMLCollection에 요소가 남아 있지 않을 때까지 무한 반복
let i = 0;
while ($elems.length > i) {
  $elems[i].className = 'blue';
}

// 유사 배열 객체이면서 이터러블인 HTMLCollection을 배열로 변환하여 순회
[...$elems].forEach(elem => elem.className = 'blue');
```

**NodeList**  
querySelectorAll 메서드가 반환하는 객체다.  
실시간으로 노드 객체의 상태 변경을 반영하지 않는 객체다.  
NodeList.prototype.forEach 메서드를 상속받아 사용할 수 있다.  
childNodes 프로퍼티가 반환하는 NodeList 객체는 실시간으로 노드 객체의 상태 변경을 반영하는 live 객체로 동작하므로 주의가 필요하다.  
```html
<!DOCTYPE html>
<html>
  <body>
    <ul id="fruits">
      <li>Apple</li>
      <li>Banana</li>
    </ul>
    <script>
      const $fruits = document.getElementById('fruits');
      
      // childNodes 프로퍼티는 NodeList 객체(live)를 반환한다.
      const { childNodes } = $fruits;
      console.log(childNodes); // NodeList(5) [text, li, text, li, text]
      
      for (let i = 0; i < childNodes.length; i++) {
        $fruits.removeChild(childNodes[i]);
      }
      
      // 예상과 다르게 $fruits 요소의 모든 자식 노드가 삭제되지 않는다. 
      console.log(childNodes); // NodeList(2) [li, li]
    </script>
  </body>
</html>
```

### 노드 탐색
요소 노드를 취득한 다음, 취득한 요소 노드를 기점으로 DOM 트리의 노드를 옮겨 다니며 부모, 형제, 자식 노드 등을 탐색<sup>traversing, node walking</sup>해야 할 때가 있다.  
DOM 트리 상의 노드를 탐색할 수 있도록 Node, Element 인터페이스는 트리 탐색 프로퍼티를 제공한다.  
노드 탐색 프로퍼티는 setter없이 getter만 존재하여 참조만 가능한 읽기 전용 접근자 프로퍼티다.  
<p align="center">
  <img src="https://user-images.githubusercontent.com/40534414/151559250-638897c8-70ab-448b-a979-9d0dedb65212.png">
</p>

**공백 텍스트 노드**  
HTML 요소 사이의 스페이스, 탭, 줄바꿈(개행) 등의 공백<sup>white space</sup>문자는 텍스트 노드를 생성한다.  
텍스트 에디터에서 HTML 문서에 스페이스 키, 탭 키, 엔터 키 등을 입력하면 공백 문자가 추가된다.  
노드를 탐색할 때는 공백 문자가 생성한 공백 텍스트 노드에 주의해야 한다.  
<p align="center">
  <img src="https://user-images.githubusercontent.com/40534414/151663177-357e25e7-7a9e-4ffc-8ced-f470257e503d.png">
</p>

**자식 노드 탐색**  
<table>
  <thead>
    <tr>
      <th align="center">프로퍼티</th>
      <th align="center">설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="left">Node.prototype.childNodes</td>
      <td align="left">자식노드를 모두 탐색하여 DOM 컬렉션 객체인 NodeList에 담아 반환한다. childNodes 프로퍼티가 
                       반환한 NodeList에는 요소 노드뿐만 아니라 텍스트 노드도 포함되어 있을 수 있다.</td>
    </tr>
    <tr>
      <td align="left">Element.prototype.children</td>
      <td align="left">자식 노드 중에서 요소 노드만 모두 탐색하여 DOM 컬렉션 객체인 HTMLCollection에 담아 반환한다. 
                       children 프로퍼티가 반환한 HTMLCollection에는 텍스트 노드가 포함되지 않는다.</td>
    </tr>
    <tr>
      <td align="left">Node.prototype.firstChild</td>
      <td align="left">첫 번째 자식 노드를 반환한다. firstChild 프로퍼티가 반환한 노드는 텍스트 노드이거나 요소 노드다.</td>
    </tr>
    <tr>
      <td align="left">Node.prototype.lastChild</td>
      <td align="left">마지막 자식 노드를 반환한다. lastChild 프로퍼티가 반환한 노드는 텍스트 노드이거나 요소 노드다.</td>
    </tr>
    <tr>
      <td align="left">Element.prototype.firstElementChild</td>
      <td align="left">첫 번째 자식 요소 노드를 반환한다. firstElementChild 프로퍼티는 요소 노드만 반환한다.</td>
    </tr>
    <tr>
      <td align="left">Element.prototype.lastElementChild</td>
      <td align="left">마지막 자식 요소 노드를 반환한다. lastElementChild 프로퍼티는 요소 노드만 반환한다.</td>
    </tr>
  </tbody>
</table>

**자식 노드 존재 확인**  
자식 노드가 존재하는지 확인하려면 Node.prototype.hasChildNodes 메서드를 사용한다.  
hasChildNodes 메서드는 자식 노드가 존재하면 true, 자식 노드가 존재하지 않으면 false를 반환한다.  
hasChildNodes 메서드는 childNodes 프로퍼티와 마찬가지와 텍스트 노드를 포함하여 자식 노드의 존재를 확인한다.  
텍스트 노드가 아닌 요소 노드가 존재하는지는 확인하려면 children.length 또는 Element 인터페이스의 childElementCount 프로퍼티를 사용한다.  

**요소 노드의 텍스트 노드 탐색**  
요소 노드의 텍스트 노드는 요소 노드의 자식 노드다.  
요소 노드의 텍스트 노드는 firstChild 프로퍼티로 접근할 수 있다.  


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
얕은 복사<sup>shallow copy</sup>와 깊은 복사<sup>deep copy</sup>  
암묵적 결합<sup>implicit coupling</sup>  
일시적 사각지대<sup>Temporal Dead Zone, TDZ</sup>(스코프 시작 시점부터 초기화 시작 시점까지 변수를 참조할 수 없는 구간)  
프로퍼티 디스크립터<sup>PropertyDescriptor</sup> 객체  
바인딩<sup>name binding</sup>(식별자와 값을 연결하는 과정을 의미)  
스코프 세이프 생성자 패턴<sup>scope-safe constructor</sup>  
프로퍼티 섀도잉<sup>property shadowing</sup>  
암묵적 전역<sup>implicit global</sup>  
공백 텍스트 노드
