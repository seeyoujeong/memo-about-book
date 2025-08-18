# Tucker의 Go 언어 프로그래밍

## 문법

### 변수

`var` 로 선언한다.

초깃값 생략이 가능하며 생략할 경우 기본값으로 대체된다.  
타입을 생략하거나 선언 대입문을 사용하면 타입 추론을 해준다.  
재선언은 불가능하며 재할당은 가능하다.

```go
var a int = 10
var msg string = "Hello"

a = 20
msg = "Good"

var b int // 0
var c = 4 // int
d := 5

// 선언 대입문을 사용할 때 변수 중 하나라도 새로운 변수가 있으면 허용
// err은 재할당
data, err := ...
val, err := ...
```

### 상수

상수로 사용될 수 있는 타입은 다음과 같다.

- 불리언
- 정수
- 실수
- 복소수
- 룬
- 문자열

`iota`키워드를 통해 열거값을 사용하기 편하다.  
타입 없는 상수는 변수에 복사될 때 타입이 정해진다.

```go
const Num int = 1

const (
	Red int = iota + 1  // 0 + 1
	Blue                // 1 + 1
	Green               // 2 + 1
)

const PI = 3.14

var a int = PI * 100
```

### 타입 변환

Go 언어는 강하게 타입 검사를 하며 자동으로 변환해주지 않는다.  
타입 변환은 원하는 타입명을 적고 `()`로 변환시키고 싶은 변수를 묶는다.  
큰 범위의 타입에서 작은 범위의 타입으로 변환하면 값이 달라질 수 있으니 주의해야 한다.

```go
a := 3
b := 3.5

c := a * b // Error
d := a * int(b)
e := b * 3 // 3은 float64로 암묵적 변환

var num1 int16 = 3456
var num2 int8 = int8(num1) // -128
```

### 연산자

대입 연산자, 복합 대입 연산자, 증감 연산자는 아무런 값을 반환하지 않는다.  
전위 증감 연산자는 지원하지 않는다.  
복수 대입 연산자로 두 변수의 값을 바꿀 수 있다.

```go
var a int
var b int
a = b = 10 // Error

a = 1
b = a += 1 // Error
b = a++ // Error
a++
b = 3

a, b = b, a // a: 3, b: 2
```

### 함수

`func` 키워드를 사용해 선언한다.  
값을 여러 개 반환할 수 있다.  
함수 선언부에 반환 타입을 적을 때 변수명까지 지정해주면 해당 변수를 명시적으로 반환하지 않아도 값을 반환할 수 있다. 지정할 경우 모두 지정해야 한다.

```go
func Add(a int, b int) int {
	return a + b
}

func Divide1(a, b int) (int, bool) {
	if b == 0 {
		return 0, false
	}

	return a / b, true
}

func Divide2(a, b int) (result int, success bool) {
	if b == 0 {
		result = 0
		success = false
		return
	}

	result = a / b
	success = true
	return
}
```

인수는 매개변수로 복사된다.

```go
arr := [3]int{1, 2, 3}

func AddIndex0(arr [3]int) {
	arr[0] = 1
}

fmt.Print(arr) // [1, 2, 3]
```

`...` 키워드를 타입 앞에 붙여서 사용하면 가변 인수를 처리할 수 있다.  
가변 인수는 함수 내부에서 해당 타입의 슬라이스로 처리된다.  
빈 인터페이스를 사용하면 여러 타입을 섞어 쓸 수 있다.

```go
func sum(nums ...int) int { ... }
```

함수 리터럴(익명 함수)에서 외부 변수를 내부 상태로 가져올 때 값 복사가 아닌 인스턴스 참조로 가져온다.  
Go 1.22 이전에는 for문 내부 변수 하나를 참조로 캡처했지만 현재는 매 루프마다 새로 캡처한다.

```go
f := make([]func(), 3)

for i := 0; i < 3; i++ {
	f[i] = func() {
		fmt.Println(i)
	}
}

for i := 0; i < 3; i++ {
	f[i]() // 0 1 2
}
```

### if문

if문 조건을 검사하기 전에 초기문을 넣을 수 있다.  
초기문에서 선언한 변수의 범위는 if문 안으로 한정된다.

```go
if filename, success := UploadFile(); success {
	...
}
```

### switch문

하나의 case는 하나 이상의 값을 비교할 수 있으며 조건문을 검사할 수 있다.  
비굣값을 적지 않으면 기본값으로 true를 사용한다.  
if문과 마찬가지로 초기문을 넣을 수 있다.

```go
temp := 18

switch {
case temp < 10, temp > 30:
	fmt.Println("...")
case temp >= 10 && temp < 20:
	fmt.Println("..")
default: // 만족하는 case가 없을 때 실행
	fmt.Println(".")
}
```

`break`를 사용하지 않아도 case 하나를 실행 후 자동으로 switch문을 빠져나가게 된다.  
만약 하나의 case문 실행 후 다음 case문까지 같이 실행시키고 싶다면 `fallthrough`키워드를 사용하면 된다.

```go
a := 1

switch a {
case 1:
	fmt.Println("...")
	fallthrough
case 2:
	fmt.Println("..")
default:
	fmt.Println(".")
}
```

### for문

Go 언어는 반복문으로 for문 하나만 지원한다.  
while문처럼 쓰고 싶다면 조건문만 쓰거나 조건문을 생략하면 true가 된다.

```go
for i := 0; i < 10; i++ { ... }

for i < 10 { ... }

for { ... }
```

`range`키워드를 사용해 정숫값을 순회할 수 있으며 0부터 정숫값 미만까지 증가하며 순회한다.

```go
for i := range 10 { ... }
```

### defer

`defer` 키워드를 명령문 앞에 사용하면 함수가 종료되기 직전에 실행되도록 지연된다.  
`defer`는 역순으로 호출된다.  
대부분 OS 내부 자원을 되돌려주기 위해 사용된다.

```go
f, err := os.Create("text.txt")

defer f.Close()

fmt.Fprinln(f, "Hello")
```
