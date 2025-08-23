# Tucker의 Go 언어 프로그래밍

## 목차

- [문법](#문법)
- [데이터 타입](#데이터-타입)
- [패키지](#패키지)
- [메서드](#메서드)
- [에러 처리](#에러-처리)
- [스택 메모리와 힙 메모리](#스택-메모리와-힙-메모리)
- [고루틴](#고루틴)

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

## 데이터 타입

### 숫자

크기를 신경 쓰지 않는 경우 보통 `int`, `float64`를 사용한다.  
정수의 기본값은 `0`이고 실수의 기본값은 `0.0`이다.  
실숫값을 표현할 때 정확한 값이 아닌 타입이 허용하는 범위에서 가장 가까운 근삿값으로 표현된다.

- uint, uint8 ~ 64
- int, int8 ~ 64
- float32, 64 (IEEE-754)
- complex64, 128 (복소수)
- byte (uint8의 별칭)
- rune (int32의 별칭, UTF-8의 문자 하나)

### 불리언

`bool`로 선언하고 `true`, `false`을 쓰며 기본값은 `false`이다.

### 문자열

`string`으로 선언하고 큰따옴표나 백쿼트로 감싸면 된다. 기본값은 빈 문자열이다.  
백쿼트로 문자열을 묶으면 특수 문자가 일반 문자처럼 처리된다.  
Go 언어는 UTF-8 문자코드를 표준 문자코드로 사용한다.  
문자 하나를 표현하는 데 `rune` 타입을 사용한다.  
`len()` 함수를 사용하면 문자열 바이트 크기를 알 수 있고 글자 수는 알 수 없다.  
`[]rune` 타입으로 타입 변환하면 글자 수를 알 수 있다.  
`string` 타입은 `[]byte` 타입과 `[]rune` 타입으로 상호 변환이 가능하다.  
한 글자씩 순회하는 방법은 `[]rune`으로 타입 변환하거나 `range` 키워드를 이용하면 된다.

```go
str := "Hello 월드"
arr := []rune(str)

for i := 0; i < len(arr); i++ {
	fmt.Println(arr[i])
}

for _, v := range str {
	fmt.Println(v)
}
```

`string` 타입의 구조는 메모리 주소와 길이를 필드로 갖는 구조체다.  
다른 변수에 대입하면 구조체 크기만큼 메모리가 복사된다.

```go
type StringHeader struct {
	Data uintptr
	Len int
}
```

합 연산으로 두 문자열을 더할 때마다 새로운 메모리 공간을 할당하므로 메모리 공간 낭비가 생긴다.  
`strings` 패키지의 `Builder`를 사용하면 낭비를 없앨 수 있다.

```go
var builder strings.Builder

builder.WriteRune('a')
builder.WriteRune('b')

builder.String() // "ab"
```

### 배열

고정된 길이의 같은 타입을 가질 수 있다.  
`...`를 사용해 길이를 생략할 수 있다.  
`range` 키워드를 통해 순회할 수 있으며 인덱스와 값을 받는다.  
배열간 대입은 메모리 주소를 복사하는게 아닌 값을 복사한다.

```go
var nums [5]int

days := [3]string{"monday", "tuesday", "wednesday"}

var s = [5]int{1:10, 3:30}

x := [...]int{10, 20, 30}

for i, v := range arr { ... }

a := [2][3]int {
	{1, 2, 3},
	{4, 5, 6}, // 쉼표를 찍어줘야 함
}
```

### 슬라이스

동적 배열인 슬라이스는 `[]타입`으로 선언하면 된다.  
슬라이스는 배열을 가리키는 포인터와 요소 개수를 나타내는 len, 전체 배열 길이를 나타내는 cap 필드로 구성된 구조체다.  
순회는 인덱스로 접근하거나 `range` 를 이용하면 된다.

```go
var slice1 = []int{1, 2, 3}
var slice2 = []int{1, 5:2, 10:3}
var slice3 = make([]int, 3)

for i := 0; i < len(slice1); i++ {
	fmt.Println(slice1[i])
}

for i, v := range slice2 { ... }
```

`append()` 함수로 슬라이스에 요소를 추가할 수 있다.  
기존의 슬라이스를 변경하는 게 아닌 새로운 슬라이스를 반환한다.  
기존 슬라이스의 남은 빈 공간의 개수보다 추가하는 요소의 개수가 작거나 같으면 기존 슬라이스를 반환한다.

```go
var slice = []int{1, 2, 3}

slice2 = append(slice, 3, 4)

var slice3 = make([]int, 3, 5)

slice4 := append(slice3, 4, 5)

slice3[1] = 6

fmt.Print(slice4) // [0, 6, 0, 4, 5]
```

슬라이싱을 통해 배열과 슬라이스의 일부를 집어낼 수 있다.  
새로운 배열이 만들어지는 게 아니라 배열의 일부를 포인터로 가리키는 슬라이스를 만들어낼 뿐이다.  
시작인덱스를 생략하면 처음부터 가져오고 끝인덱스를 생략하면 끝까지 가져온다. 그리고 둘 다 생략하면 전체를 가져온다.  
인덱스 3개로 슬라이싱하면 cap 크기를 조절할 수 있다.

```go
array := [5]int{1, 2, 3, 4, 5}
slice := array[1:2] // len: 1, cap: 4

slice = append(slice, 500)

fmt.Print(array) // [1, 2, 500, 4, 5]
```

슬라이스를 복제하거나 요소를 삭제, 추가는 아래와 같이 하면 된다.

```go
slice2 := append([]int{}, slice1...) // 복제

slice = append(slice[:idx], slice[idx+1:]...) // 삭제

slice = append(slice, 0) // 추가
copy(slice[idx+1:], slice[idx:]) // 복사 위치, 복사 대상
slice[idx] = 100
```

### 구조체

초깃값을 생략하면 모든 필드가 기본값으로 초기화된다.  
일부 필드값만 초기화할 때는 ‘필드명: 필드값’ 형식으로 초기화한다.  
구조체 값을 복사하면 모든 필드값이 복사된다.

```go
type House struct {
	Address string
	Size int
	Price float64
}

var house House = House{"서울시", 30, 9.80}

var house House = House{ Size: 28, Price: 10.0 }
```

구조체 안에 포함된 다른 구조체의 필드명을 생략하면 점 한 번만으로 접근할 수 있다.  
중복된 필드명이 존재한다면 하위 구조체로 직접 접근하면 된다.

```go
type User struct {
	Name string
	Age  int
	Level int
}

type VIPUser struct {
	User // 필드명 생략
	Level int
}

func main() {
	vip := VIPUser{
		User{"a", 10, 3},
		3,
	}

	fmt.Println(vip.Name)
	fmt.Println(vip.Level) // VIPUser의 Level
	fmt.Print(vip.User.Level) // 직접 접근
}
```

구조체를 정의할 때 메모리 정렬로 인해 메모리 패딩이 발생하므로 메모리 낭비를 줄이려면 작은 크기 필드값을 앞에 배치한다.

```go
type Item1 struct { // 40바이트
	A int8 // 1바이트
	B int // 8바이트
	C int8 // 1바이트
	D int // 8바이트
	E int8 // 1바이트
}

type Item2 struct { // 24바이트
	A int8 // 1바이트
	C int8 // 1바이트
	E int8 // 1바이트
	B int // 8바이트
	D int // 8바이트
}
```

### 포인터

포인터는 메모리 주소를 값으로 갖는 타입이며 기본값은 `nil`이다.

```go
var a int = 100
var p *int

p = &a

*p = 200

fmt.Print(a) // 200
```

포인터 변수에 구조체를 생성해 주소를 초깃값으로 대입하는 방법은 아래와 같다.

```go
var data1 *Data = &Data{}
data2 := &Data{3, 4}
var data3 = new(Data) // 원하는 값으로 초기화 불가능
```

구조체 포인터 변수의 필드값에 접근할 때 Go 언어에서는 `obj.val`라고만 써도 동작한다.

### 함수 타입

함수 시작 지점을 가리키는 값이며 포인터처럼 함수를 가리킨다고 해서 함수 포인터라고 부른다.  
`func (int, int) int`처럼 선언하며 기본값은 `nil`이다.

### 인터페이스

인터페이스 선언은 `type`을 쓴 뒤 인터페이스명을 쓰고 `interface` 키워드를 쓴다. 그런 뒤 중괄호 안에 메서드 집합을 쓰면 된다.  
인터페이스 변수의 기본값은 `nil`이다.  
오버로딩 기능은 없다.

```go
type TempInter interface {
	A()
	B(c int) int
}
```

인터페이스 구현 여부는 메서드 셋으로 결정된다. 메서드 셋은 다음 규칙을 따른다.

- 값 타입 `T`의 메서드 셋:
  - `T`의 값 리시버 메서드만 포함된다.
- 포인터 타입 `*T`의 메서드 셋:
  - `T`의 값 리시버 + 포인터 리시버 메서드 모두 포함된다.

```go
type Sender interface {
	Send(parcel string)
}

func SendBook(name string, sender Sender) {
	sender.Send(name)
}

type Post struct {}

func (p *Post) Send(parcel string) {
	fmt.Println(parcel)
}

post1 := Post{}
sendBook("이름", post1) // Error: 값 리시버 메서드만 포함

post2 := &Post{}
sendBook("이름", post2)
```

인터페이스안에 다른 인터페이스를 포함할 수 있으며 합집합이라고 생각하면 된다.

```go
type Reader interface {
	Read() (n int, err error)
	Close() error
}

type Writer interface {
	Write() (n int, err error)
	Close() error
}

type ReadWriter interface {
	Reader
	Writer
}
```

빈 인터페이스는 어떤 값이든 받을 수 있는 함수, 메서드, 변수값을 만들 때 사용한다.

```go
func PrintVal(v interface{}) {
	switch t := v.(type) {
	case int: ...
	case float64: ...
	case string: ...
	default: ...
}
```

인터페이스 변수를 다른 구체화된 타입으로 타입 단언할 수 있다.  
타입 단언은 `val.(ConcreteType)`으로 할 수 있다.  
구체화된 타입이 인터페이스 메서드 집합을 포함하고 있지 않으면 컴파일 에러가 발생한다.

```go
type Stringer interface {
	String() string
}

type Student struct {}

var stringer Stringer
stringer.(*Student) // 컴파일 에러
```

단언하려는 타입이 인터페이스를 이미 포함하고 있다고 하더라도 실제 인터페이스 변수가 가리키는 인스턴스가 단언하려는 타입이 아닌 경우에는 런타임 에러가 발생한다.

```go
type Stringer interface {
	String() string
}

type Student struct {}

func (a *Student) String() string { ... }

type Actor struct {}

func (a *Actor) String() string { ... }

func ConvertType(stringer Stringer) {
	student := stringer.(*Student) // 런타임 에러
	...
}

actor := &Actor{}

ConvertType(actor)
```

인터페이스는 구체화된 타입뿐 아니라 다른 인터페이스로 타입 단언할 수 있다.  
인터페이스가 가리키는 실제 인스턴스가 단언하고자 하는 다른 인터페이스를 포함하지 않으면 런타임 에러가 난다.  
Go 언어에서는 인터페이스에서 다른 인터페이스로 타입 단언하는 것은 문법적으로 문제 없다고 취급하기 때문에 런타임 에러가 난다.

```go
var a AInterface = ConcreteType{}
b := a.(BInterface)
```

타입 단언 가능 여부를 확인하여 런타임 에러가 발생하지 않는 방법은 타입 단언 반환값을 두 개의 변수로 받아서 타입 단언 가능 여부를 두 번째 반환값으로 받는 것이다.

```go
func ReadFile(reader Reader) {
	if c, ok := reader.(Closer); ok {
		c.Close()
	}
}
```

빈 인터페이스 변수에 기본 타입값을 대입할 때 Go 언어에서는 빈 인터페이스를 만들어서 기본 타입값을 가리키도록 한다. 그래서 아래 예제의 변수들은 서로 다른 주소값을 가지고 있다.

```go

var v1 int = 3
var v2 interface{} = &v1
var v3 int = *(v2.(*int))

fmt.Printf("v1: %x\n", &v1)
fmt.Printf("v2: %x\n", &v2)
fmt.Printf("v3: %x\n", &v3)

```

### 맵

키와 값 형태로 데이터를 저장하는 자료구조이며 입력한 순서가 보장되지 않는다.  
맵은 내부적으로 포인터를 가진 구조이므로 다른 변수에 대입해도 전체 값이 복사되지 않는다.  
요소를 삭제할 땐 `delete(맵 변수, 키)` 함수를 사용하면 된다.  
값이 0일 때와 아예 요소가 없을 때 둘 다 0이 출력되기 때문에 복수 반환을 받아서 확인해야 한다.

```go
type Product struct {
	Name string
	Price int
}

func main() {
	m := make(map[int]Product)

	m[16] = Product{ "볼펜", 500 }
	m[46] = Product{ "지우개", 200 }
	m[78] = Product{ "자", 1000 }
	m[345] = Product{ "샤프", 3000 }
	m[897] = Product{ "샤프심", 500 }

	for k, v := range m {
		fmt.Println(k, v)
	}

	if v, ok := m[3]; ok {
		fmt.Println(v)
	}
}
```

### 채널

고루틴 간 메시지를 전달하는 메시지 큐이다.  
`make()` 함수로 채널을 만들 수 있고 타입은 `chan [타입]` 으로 선언하면 된다.  
채널에 데이터를 넣고 뺄 때는 `<-` 연산자를 이용하면 된다.  
버퍼를 가진 채널은 `make()` 함수의 두번째 인수에 버퍼 크기를 넣어서 만들면 된다. 만약 버퍼를 초과한 상태에서 데이터를 빼가지 않으면 데드락이 발생한다.  
`for range` 구문을 사용하면 채널에서 데이터를 계속 기다릴 수 있으며 채널을 다 사용하면 `close()` 함수를 호출해 채널을 닫아줘야 데드락에 안걸린다.

```go
import (
	"fmt"
	"sync"
	"time"
)

func square(wg *sync.WaitGroup, ch chan int) {
	for n := range ch {
		fmt.Printf("Square: %d\n", n * n)
		time.Sleep(time.Second)
	}

	wg.Done()
}

func main() {
	var wg sync.WaitGroup
	ch := make(chan int, 1)

	wg.Add(1)
	go square(&wg, ch)

	for i := range 10 {
		ch <- i * 2
	}
	close(ch)

	wg.Wait()
}
```

select문을 통해 여러 채널을 동시에 기다릴 수 있다.  
하나의 case만 처리되면 종료되기 때문에 for문과 함께 사용해야 한다.

```go
import (
	"fmt"
	"sync"
	"time"
)

func square(wg *sync.WaitGroup, ch chan int) {
	tick := time.Tick(time.Second)
	terminate := time.After(10 * time.Second)

	for {
		select {
		case <- tick:
			fmt.Println("Tick")
		case <- terminate:
			fmt.Println("Terminated!")
			wg.Done()
			return
		case n := <- ch:
			fmt.Printf("Square: %d\n", n * n)
			time.Sleep(time.Second)
		}
	}
}

func main() {
	var wg sync.WaitGroup
	ch := make(chan int)

	wg.Add(1)
	go square(&wg, ch)

	for i := range 10 {
		ch <- i * 2
	}

	wg.Wait()
}
```

## 패키지

Go 언어에서 코드를 묶는 가장 큰 단위를 패키지라고 한다.  
Go 언어는 `main()` 함수를 포함한 `main` 패키지를 시작점으로 한다.  
Go 언어에서는 패키지명을 쉽고 간단하며 소문자로 할 것을 권장한다.  
패키지명은 가져오는 경로의 가장 마지막 폴더명이며 첫 글자가 대문자로 시작하는 이름은 외부로 노출된다.

```go
package main

import (
	"fmt"
	"math/rand"
)

func main() {
	fmt.Println(rand.Int())
}
```

별칭을 사용해 겹치는 패키지명을 구별할 수 있다.  
사용하지 않는 패키지가 있으면 에러가 발생하는데 부가효과를 얻고자 임포트하는 경우에는 밑줄을 패키지명 앞에 붙여주면 된다.  
외부 패키지는 `GOPATH/pkg/mod` 폴더에 버전별로 설치된다.

```go
import (
	"text/template"
	htemplate "html/template"
	_ "github.com/mattn/go-sqlite3"
)
```

### Go 모듈

Go 모듈은 Go 패키지들을 모아놓은 Go 프로젝트 단위이며 1.16 버전부터 Go 모듈 사용이 기본이 됐다.  
`go build`를 하려면 반드시 Go 모듈 루트 폴더에 `go.mod`파일이 있어야 한다.  
`go.mod`에는 Go 버전과 외부 패키지 등이 명시되어 있으며 `go.sum`에는 외부 패키지 버전 정보를 담고 있다.  
Go 모듈은 `go mod init [모듈명]` 명령을 통해 만들 수 있다.  
같은 Go 모듈 아래에 있는 패키지는 Go 모듈명 아래 위치하도록 해서 임포트한다.  
`go mod tidy` 명령은 Go 모듈에 필요한 패키지를 찾아서 다운로드해준다.

### 패키지 간 임포트/익스포트

패키지명은 폴더명과 같아야 하며 대문자로 시작하는 식별자만 익스포트된다.  
같은 패키지 내에서는 모든 식별자에 접근 가능하다.  
임포트 경로는 `go.mod`의 모듈명 기준이다.  
하위 폴더에서 상위 폴더의 코드를 가져올 때는 절대 경로로 임포트하면 된다.  
아래의 구조를 예시로 보면 `utils` 폴더에 속한 파일들은 `package utils` 를 선언해주고 `main.go` 에서 임포트해서 쓸땐 `“myproject/utils”`로 가져오면 된다.

```
myproject/
├── go.mod
├── main.go
├── utils/
│   ├── math.go
│   └── string.go
└── models/
    └── user.go
```

```
// go.mod

module myproject

go 1.24.4
```

```go
// utils/math.go

package utils

// 익스포트됨 (대문자 시작)
func Add(a, b int) int {
    return a + b
}

// 익스포트되지 않음 (소문자 시작)
func multiply(a, b int) int {
    return a * b
}

// 익스포트됨
const PI = 3.14159

// 익스포트되지 않음
const version = "1.0"
```

```go
// utils/string.go

package utils

func GetPI() float64 {
	return PI // 같은 패키지의 상수
}
```

```go
// models/user.go

package models

// 익스포트되는 구조체
type User struct {
    Name string    // 익스포트되는 필드
    age  int      // 익스포트되지 않는 필드
}

// 익스포트되는 생성자 함수
func NewUser(name string) *User {
    return &User{
        Name: name,
        age:  0,
    }
}

// 익스포트되는 메서드
func (u *User) GetAge() int {
    return u.age
}

// 익스포트되지 않는 메서드
func (u *User) setAge(age int) {
    u.age = age
}
```

```go
package main

import (
    "fmt"
    "myproject/utils"  // 상대 경로로 임포트
    "myproject/models"
)

func main() {
    result := utils.Add(5, 3)  // 패키지명.함수명
    fmt.Println(result)

    user := models.NewUser("홍길동")
    fmt.Println(user.Name)
}
```

### 패키지 초기화

패키지를 임포트하면 컴파일러는 패키지 내 전역 변수를 초기화하고 패키지에 `init()` 함수가 있다면 호출해 패키지를 초기화한다.  
`init()` 함수는 입력 매개변수와 반환값이 없어야 한다.

## 메서드

패키지 내 선언된 구조체, 별칭 타입들을 리시버로 사용해 메서드를 정의할 수 있다.  
포인터 메서드를 호출하면 메모리의 주솟값이 복사되어 원본값을 수정할 수 있지만 값 타입 메서드를 호출하면 리시버 타입의 모든 값이 복사되어 원본값은 수정할 수 없다.  
포인터 변수로 값 타입 메서드를 호출하면 자동으로 값 타입으로 변환하여 호출해주며 그 반대도 마찬가지다.

```go
type account struct {
	balance int
}

func (a *account) withdrawMethod(amount int) { // 포인터 메서드
	a.balance -= amount
}

a := &account{ 100 }

a.withdrawMethod(30)

type myInt int

func (x myInt) add(y int) int { // 값 타입 메서드
	return int(x) + y
}

var x myInt = 10

x.add(30)
```

## 에러 처리

`fmt` 패키지의 `Errorf()` 함수나 `errors` 패키지의 `New()` 함수를 이용하면 `error`를 생성할 수 있다.  
`error` 타입은 인터페이스로 문자열을 반환하는 `Error()` 메서드로 구성되어 있다.  
`fmt` 패키지는 내부적으로 타입이 `error`인지 확인하고 `Error()`를 호출해주는 로직을 포함하고 있다.

```go
fmt.Errorf("에러!")
errors.New("에러!")
```

```go
type PasswordError struct {
	Len int
	RequireLen int
}

func (err PasswordError) Error() string {
	return "암호 길이가 짧습니다."
}

func RegisterAccount(name, password string) error {
	if len(password) < 8 {
		return PasswordError{ len(password), 8 }
	}

	return nil
}

func main() {
	err := RegisterAccount("myID", "myPw")

	if err != nil {
		if errInfo, ok := err.(PasswordError); ok {
			fmt.Printf("%v Len:%d RequireLen:%d\n",
					errInfo, errInfo.Len, errInfo.RequireLen)
		}
	} else {
		fmt.Println("회원 가입됐습니다.")
	}
}
```

에러를 감싸서 새로운 에러를 만들 수 있다.  
감싸진 에러가 특정 타입인 경우 `errors` 패키지의 `As()` 함수를 이용해 꺼내올 수 있다.

```go
import (
	"errors"
	"fmt"
)

// 1. 커스텀 에러 타입 정의
type MyError struct {
	msg string
}

func (e *MyError) Error() string {
	return e.msg
}

// 2. 커스텀 에러 생성
func Error1() error {
	return &MyError{msg: "에러1 발생"}
}

// 3. 에러 래핑
func Error2() error {
	err := Error1()

	if err != nil {
		return fmt.Errorf("에러2 발생: %w", err)
	}
	return nil
}

// 4. 래핑된 에러를 추출
func main() {
	err := Error2()

	var innerErr *MyError
	if errors.As(err, &innerErr) {
		fmt.Println("내부 에러:", innerErr)
	} else {
		fmt.Println("MyError 타입이 아님")
	}
}

```

`panic()` 함수를 사용하면 프로그램을 바로 종료시킬 수 있다.  
패닉 발생 시 `defer` 함수들이 실행되면서 그 안에서 `recover()` 함수가 호출되면 복구 가능하다.

```go
type MyError struct {
    Msg string
}

func (e MyError) Error() string {
    return e.Msg
}

func doSomething() {
    panic(MyError{Msg: "Something went wrong!"}) // 특정 타입 패닉
}

func main() {
    defer func() {
        if r := recover(); r != nil {
            // 타입 단언으로 검사
            if myErr, ok := r.(MyError); ok {
                fmt.Println("Recovered from MyError:", myErr.Msg)
            } else {
                fmt.Println("Recovered from unknown panic:", r)
            }
        }
    }()

    doSomething()
}
```

## 스택 메모리와 힙 메모리

스택 메모리는 함수 내부에서만 사용 가능한 영역이다.  
Go 언어는 탈출 분석를 해서 어느 메모리에 할당할 지를 결정한다.  
Go 언어는 어떤 타입이나 메모리 할당 함수에 의해서 스택 메모리를 사용할지 힙 메모리를 사용할지를 결정하는 게 아닌 메모리 공간이 함수 외부로 공개되는지 여부를 자동으로 검사해서 스택 메모리에 할당할지 힙 메모리에 할당할지 결정한다.

```go
type User struct {
	Name string
	Age int
}

func NewUser(name string, age int) *User {
  var u = User{name, age}
  return &u // 탈출 분석으로 u 메모리가 사라지지 않음
}

func main() {
	userPointer := NewUser("AAA", 23)

	fmt.Println(userPointer)
}
```

## 고루틴

고루틴은 Go 언어에서 관리하는 경량 스레드이며 함수나 명령을 동시에 수행할 때 사용한다.

### 사용 방법

`go` 키워드를 쓰고 함수를 호출하면 해당 함수를 수행하는 새로운 고루틴을 생성한다.  
메인 함수가 종료되면 실행 중인 고루틴은 모두 즉시 종료되므로 `sync` 패키지의 `WaitGroup` 객체를 사용해야 한다.

```go
import (
	"fmt"
	"sync"
)

var wg sync.WaitGroup

func SumAtoB(a, b int) {
	sum := 0

	for i := a; i <= b; i++ {
		sum += i
	}

	fmt.Printf("%d부터 %d까지 합께는 %d입니다.\n", a, b, sum)
	wg.Done() // 작업이 완료됨을 표시
}

func main() {
	wg.Add(10)	// 총 작업 개수 설정
	for i := 0; i < 10; i++ {
		go SumAtoB(1, 1000000000)
	}

	wg.Wait() // 모든 작업이 완료되길 기다림

	fmt.Println("모든 계산이 완료됐습니다.")
}
```

### 동작 방법

고루틴은 명령을 수행하는 단일 흐름으로 OS 스레드를 이용하는 경량 스레드이다.  
Go 언어에서는 CPU 코어, OS 스레드, 고루틴을 서로 조율하여 사용해 고루틴을 효율적으로 다룬다.  
main 루틴만 존재하면 OS 스레드를 하나 만들어 첫 번째 코어와 연결하고 OS 스레드에서 고루틴을 실행한다.  
여분의 코어가 존재한다면 OS 스레드를 생성하여 고루틴을 실행할 수 있다.  
여분의 코어가 없다면 남는 코어가 생길 때까지 고루틴들은 대기한다.  
코어와 스레드는 변경되지 않고 오직 고루틴만 옮겨 다니기 때문에 컨텍스트 스위칭 비용이 발생하지 않는 장점이 있다.

### 뮤텍스

같은 메모리 공간에 동시에 접근하면 동시성 문제를 일으킬 수 있다. 이때 뮤텍스를 이용하면 자원 접근 권한을 통제할 수 있다.  
뮤텍스의 `Lock()` 메서드를 호출해 뮤텍스를 획득하고 `Unlock()` 메서드를 호출해 반납한다.  
이미 다른 고루틴이 뮤텍스를 획득했다면 나중에 호출한 고루틴은 앞서 획득한 뮤텍스가 반납될 때까지 대기한다.

```go
import "sync"

var mutex sync.Mutex

func f1() {
	mutex.Lock()
	defer mutex.Unlock()
	...
}
```

### 컨텍스트

`context` 패키지에서 제공하는 기능으로 작업을 지시할 때 작업 가능, 시간, 작업 취소 등의 조건을 지시할 수 있는 작업 명세서 역할을 한다.  
컨텍스트 관련 함수를 쓸 때 상위 컨텍스트가 없다면 가장 기본적인 컨텍스트인 `context.Background()`를 사용하면된다.  
`context.WithCancel()` 함수는 취소 가능한 컨텍스트를 생성하며 반환값의 첫 번째는 컨텍스트 객체이고 두 번째는 취소 함수이다.  
`context.WithTimeout()` 함수는 작업 시간을 설정할 수 있는 컨텍스트를 생성하며 반환값의 첫 번째는 컨텍스트 객체이고 두 번째는 취소 함수이다.

```go
import (
	"context"
	"fmt"
	"sync"
	"time"
)

var wg sync.WaitGroup

func main() {
	wg.Add(1)
	ctx, cancel := context.WithCancel(context.Background())
	go PrintEverySecond(ctx)
	time.Sleep(5 * time.Second)
	cancel()

	wg.Wait()
}

func PrintEverySecond(ctx context.Context) {
	tick := time.Tick(time.Second)

	for {
		select {
		case <- ctx.Done():
			wg.Done();
			return
		case <- tick:
			fmt.Println("Tick")
		}
	}
}
```

`context.WithValue()` 함수는 특정 값을 설정할 수 있는 컨텍스트로 특정 키로 값을 읽어올 수 있다. 여러 값을 설정하고 싶다면 상위 컨텍스트에 여러번 등록하면 된다.

```go
import (
	"context"
	"fmt"
	"sync"
	"time"
)

var wg sync.WaitGroup

func main() {
	wg.Add(1)

	ctx, cancel := context.WithCancel(context.Background())
	ctx = context.WithValue(ctx, "number", 9)
	go square(ctx)

	time.Sleep(3 * time.Second)
	cancel()

	wg.Wait()
}

func square(ctx context.Context) {
	if v := ctx.Value("number"); v != nil {
		n := v.(int)
		fmt.Printf("Square:%d", n * n)
	}

	wg.Done()
}
```
