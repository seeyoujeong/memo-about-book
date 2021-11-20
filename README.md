# 용어 정리

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
