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

## 함수
함수는 일련의 과정을 문<sup>statement</sup>으로 구현하고 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것이다.  
함수 내부로 입력을 전달받는 변수를 **매개변수<sup>parameter</sup>**, 입력을 **인수<sup>argument</sup>**, 출력을 **반환값<sup>return value</sup>** 이라 한다.

|함수 정의 방식|예시|
|-----|-----|
|함수 선언문|function add(x, y) {<br>&nbsp;&nbsp;return x + y;<br>}|
|함수 표현식|var add = function (x, y) {<br>&nbsp;&nbsp;return x + y;<br>};|
|Function 생성자 함수|var add = new Function('x', 'y', 'return x + y');|
|화살표 함수|var add = (x, y) => x + y;|

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
