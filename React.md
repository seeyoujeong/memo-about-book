# 리액트를 다루는 기술

## 목차
- [리액트 시작](#리액트-시작)  
- [JSX](#jsx)
- [컴포넌트](#컴포넌트)
- [이벤트 핸들링](#이벤트-핸들링)
- [ref](#ref)

## 리액트 시작
리액트는 자바스크립트 라이브러리로 사용자 인터페이스를 만드는 데 사용합니다.  
오직 V(View)만 신경 쓰는 라이브러리입니다.  
리액트 프로젝트에서 특정 부분이 어떻게 생길지 정하는 선언체를 컴포넌트(component)라고 합니다.  

### 초기 렌더링  
어떤 UI 관련 프레임워크, 라이브러리를 사용하든지 간에 맨 처음 어떻게 보일지를 정하는 초기 렌더링이 필요합니다.  
리액트에서는 이를 다루는 render 함수가 있습니다. 이 함수는 컴포넌트가 어떻게 생겼는지 정의하는 역할을 합니다. 뷰가 어떻게 생겼고 어떻게 작동하는지에 대한 정보를 지닌 객체를 반환합니다.  
최상위 컴포넌트의 렌더링 작업이 끝나면 지니고 있는 정보들을 사용하여 HTML 마크업을 만들고, 이를 우리가 정하는 실제 페이지의 DOM 요소 안에 주입합니다.  

### 조화 과정 
리액트에서 뷰를 업데이트할 때는 "업데이트 과정을 거친다"라고 하기보다는 "조화 과정(reconciliation)을 거친다"라고 하는 것이 더 정확한 표현입니다. 컴포넌트에서 데이터에 변화가 있을 때 우리가 보기에는 변화에 따라 뷰가 변형되는 것처럼 보이지만, 사실은 새로운 요소로 갈아 끼우기 때문입니다. 이 작업 또한 render 함수가 맡아서 합니다.  
컴포넌트는 데이터를 업데이트했을 때 단순히 업데이트한 값을 수정하는 것이 아니라, 새로운 데이터를 가지고 render 함수를 또 다시 호출합니다.  
render 함수가 반환하는 결과를 곧바로 DOM에 반영하지 않고, 이전에 render 함수가 만들었던 컴포넌트 정보와 현재 render 함수가 만든 컴포넌트 정보를 비교합니다.  
자바스크립트를 사용하여 두 가지 뷰를 최소한의 연산으로 비교한 후, 둘의 차이를 알아내 최소한의 연산으로 DOM 트리를 업데이트합니다.  

### Virtual DOM
Virtual DOM을 사용하면 실제 DOM에 접근하여 조작하는 대신, 이를 추상화한 자바스크립트 객체를 구성하여 사용합니다.  
리액트에서 데이터가 변하여 웹 브라우저에 실제 DOM을 업데이트할 때는 세 가지 절차를 밟습니다.  
1. 데이터를 업데이트하면 전체 UI를 Virtual DOM에 리렌더링합니다.  
2. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교합니다.  
3. 바뀐 부분만 실제 DOM에 적용합니다.  

### 번들러<sup>bundler</sup> 
번들러 도구를 사용하면 import로 모듈을 불러왔을 때 불러온 모듈을 모두 합쳐서 하나의 파일을 생성해 줍니다. 또 최적화 과정에서 여러 개의 파일로 분리될 수도 있습니다.  
대표적인 번들러로 웹팩, Parcel, browserify라는 도구들이 있습니다. 웹팩을 사용하면 SVG 파일과 CSS 파일도 불러와서 사용할 수 있습니다.  

## JSX
JSX는 자바스크립트 확장 문법이며 XML과 매우 비슷하게 생겼습니다. 이런 형식으로 작성한 코드는 브라우저에서 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환됩니다.  
JSX는 편리한 문법이지만, 올바르게 사용하려면 몇 가지 규칙을 준수해야 합니다.  
- 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 합니다.  
- 자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 { }로 감싸면 됩니다.  
- JSX 내부의 자바스크립트 표현식에서 if 문을 사용할 수 없어서 JSX 밖에서 if 문을 사용하거나 { } 안에 조건부 연산자를 사용하면 됩니다.
- && 연산자를 사용해서 조건부 렌더링을 할 수 있습니다. 단, falsy한 값인 0은 예외적으로 화면에 나타납니다. 
- 리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안 됩니다. 반면 JSX 내부에서 undefined를 렌더링하는 것은 괜찮습니다.  
- DOM 요소에 스타일을 적용할 때는 객체 형태로 넣어 주어야 하고 카멜 표기법으로 작성해야 합니다.  
- JSX에서는 class가 아닌 className으로 설정해 주어야 합니다.  
- JSX에서는 태그를 닫지 않으면 오류가 발생합니다.  
- JSX 내부에서 주석을 작성할 때는 {/\* ⋯ \*/}와 같은 형식으로 작성합니다.

## 컴포넌트
리액트를 사용하여 애플리케이션의 인터페이스를 설계할 때 사용자가 볼 수 있는 요소는 여러 가지 컴포넌트로 구성되어 있습니다.  
컴포넌트의 기능은 단순한 템플릿 이상입니다. 데이터가 주어졌을 때 이에 맞추어 UI를 만들어 주는 것은 물론이고, 라이프사이클 API를 이용하여 컴포넌트가 화면에서 나타날 때, 사라질 때, 변화가 일어날 때 주어진 작업들을 처리할 수 있으며, 임의 메서드를 만들어 특별한 기능을 붙여 줄 수 있습니다.  

### 클래스형 컴포넌트
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>
  }
}
```

### 모듈 내보내기<sup>export</sup>  
```javascript
export default MyComponent;
```

### 모듈 불러오기<sup>import</sup>
```javascript
import MyComponent from './MyComponent';
```

### props
props는 properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소입니다.  
props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있습니다.  
props 값은 컴포넌트 함수의 파라미터로 받아 와서 사용할 수 있습니다.  
```javascript
const MyComponent = props => {
  return (
    <div>{props.name}</div>
  );
};
```
defaultProps를 설정하면 props 값을 따로 지정하지 않았을 때 보여 줄 기본값을 설정할 수 있습니다.  
children은 컴포넌트 태그 사이의 내용을 보여 주는 props입니다.  
비구조화 할당 문법을 통해 props를 사용하면 작업을 더 편하게 할 수 있습니다.  
propTypes를 사용하면 컴포넌트의 필수 props를 지정(isRequired)하거나 props의 타입을 지정할 수 있습니다.  
```javascript
import PropTypes from 'prop-types';

// destructuring assignment
const MyComponent = ({ name, number, children }) => {
  return (
    <div>{name} {number} {children}</div>
  );
};

MyComponent.defaultProps = {
  name: 'default name'
};

MyComponent.propTypes = {
  name: PropTypes.string
  number: PropTypes.number.isRequired
};
```
```javascript
const App = () => {
  return (
    <MyComponent name="React" number={1}>
      react
    </MyComponent>
  );
};
```
클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조회하면 됩니다.  
```javascript
class MyComponent extends Component {
  render() {
    const { name, number, children } = this.props;
    return (
    <div>{name} {number} {children}</div>
    );
  } 
}
```
    
### state
리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미합니다.  
두 가지 종류의 state가 있는데 하나는 클래스형 컴포넌트가 지니고 있는 state이고, 다른 하나는 함수형 컴포넌트에서 useState라는 함수를 통해 사용하는 state입니다.  

**클래스형 컴포넌트의 state**  
컴포넌트에 stat를 설정할 때는 다음과 같이 constructor 메서드를 작성하여 설정합니다.  
클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출해 주어야 합니다.  
컴포넌트의 state는 객체 형식이어야 합니다.  
render 함수에서 현재 state를 조회할 때는 this.state를 조회하면 됩니다.  
this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.  
state 객체 안에는 여러 값이 있을 수 있습니다.  
```javascript
(...)
constructor(props) {
  super(props);
  this.state = {
    number: 0,
    fixedNumber: 0
  };
}
render() {
  const { number, fixedNumber } = this.state;
  return (
    <div>
      <h1>{number}</h1>
      <h2>{fixedNumber}</h2>
      <button
        onClick={() => {
          this.setState({ number: number + 1 });
        }}
      >
        +1
      </button>
    </div>
  );
}
(...)
```
constructor 메서드를 선언하지 않고도 state 초깃값을 설정할 수 있습니다.  
```javascript
(...)
state = {
  number: 0,
  fixedNumber: 0
};
render() { 
  const { number, fixedNumber } = this.state;
  return (...);
}
(...)
```
this.setState를 사용하여 state 값을 업데이트할 때는 상태가 비동기적으로 업데이트됩니다. 그래서 this.setState를 두 번 호출해도 state 값이 바로 바뀌지 않습니다.  
이에 대한 해결책은 this.setState를 사용할 때 객체 대신에 함수를 인자로 넣어 주는 것입니다.  
함수의 파라미터에 prevState는 기존 상태이고, props는 현재 지니고 있는 props를 가리킵니다. 만약 업데이트하는 과정에서 props가 필요하지 않다면 생략해도 됩니다.  
```javascript
(...)
<button
  onClick={() => {
    this.setState(prevState => {
      return {
        number: prevState.number + 1
      }
    });
    this.setState(prevState => ({
      number: prevState.number + 1
    }));
  }}
>
  +1
</button>
(...)
```
setState를 사용하여 값을 업데이트하고 난 다음에 특정 작업을 하고 싶을 때는 setState의 두 번째 파라미터로 콜백 함수를 등록하여 작업을 처리할 수 있습니다.  
```javascript
(...)
<button
  onClick={() => {
    this.setState(
      {
        number: number + 1
      },
      () => {
        console.log('call setState');
        console.log(this.state);
      }
    );
  }}
>
  +1
</button>
(...)
```  
<br>  

**함수형 컴포넌트에서 useState 사용하기**  
useState 함수의 인자에는 상태의 초깃값을 넣어 줍니다. 반드시 초깃값은 객체가 아니어도 상관없습니다.  
함수를 호출하면 배열이 반환되는데 배열의 첫 번째 원소는 현재 상태이고, 두 번째 원소는 상태를 바꾸어 주는 함수입니다. 배열 비구조화 할당을 통해 이름을 자유롭게 정해 줄 수 있습니다.  
useState는 한 컴포넌트에서 여러 번 사용해도 상관없습니다.  
```javascript
import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('Hi!');
  const onClickLeave = () => setMessage('Bye!');
  
  const [color, setColor] = useState('black');
  
  return (
    <div>
      <button onClick={onClickEnter}>enter</button>
      <button onClick={onClickLeave}>leave</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>red</button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>green</button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>blue</button>
    </div>
  );
};

export default Say;
```

## 이벤트 핸들링
사용자가 웹 브라우저에서 DOM 요소들과 상호 작용하는 것을 이벤트라고 합니다.  
이벤트를 사용할 때 주의 사항이 있습니다.  
- 이벤트 이름은 카멜 표기법으로 작성합니다.
- 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달합니다.  
- DOM 요소에만 이벤트를 설정할 수 있습니다.  

**onChange 이벤트 핸들링하기**  
콘솔에 기록되는 e 객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체입니다.  
SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화되므로 정보를 참조할 수 없습니다.  
비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist() 함수를 호출해 주어야 합니다.  
```javascript
(...)
<input
  type="text"
  name="message"
  placeholder="default"
  onChange={
    (e) => {
      console.log(e);
    }
  }
/>
(...)
```
state에 input 값을 담고 버튼을 누를 때 message 값을 공백으로 설정해 보겠습니다.    
state 초깃값을 설정하고, 이벤트 핸들링 함수 내부에서 this.setState 메서드를 호출하여 state를 업데이트해 봅니다.  
그다음에는 input의 value 값을 state에 있는 값으로 설정합니다.  
input 요소 코드 아래쪽에 button을 하나 만들고, 클릭 이벤트가 발생하면 현재 message 값을 메시지 박스로 뛰운 후 값을 공백으로 설정합니다.
```javascript
(...)
state = {
  message: ''
};

render() {
  return (
    <div>
      <input
        (...)
        value={this.state.message}
        onChange={
          (e) => {
            this.setState({
              message: e.target.value
            });
          }
        }
      />
      <button onClick={
        () => {
          alert(this.state.message);
          this.setState({
            message: ''
          });
        }
      }>check</button>
    </div>
  );
}
(...)
```
<br>

**임의 메서드 만들기**  
지금까지 이벤트를 처리할 때 랜더링을 하는 동시에 함수를 만들어서 전달해 주었습니다. 이 방법 대신 함수를 미리 준비하여 전달하는 방법도 있습니다. 성능상으로는 차이가 거의 없지만, 가독성은 훨씬 높습니다.  
```javascript
(...)
constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
  this.handleClick = this.handleClick.bind(this);
}

handleChange(e) {
  this.setState({
    message: e.target.value
  });
}

handleClick() {
  alert(this.state.message);
  this.setState({
    message: ''
  });
}
(...)
```
함수가 호출될 때 this는 호출부에 따라 결정되므로, 클래스의 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져 버립니다. 이 때문에 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 바인딩하는 작업이 필요합니다.  

**Property Initializer Syntax를 사용한 메서드 작성**  
메서드 바인딩은 생성자 메서드에서 하는 것이 정석입니다. 하지만 이 작업을 불편하다고 느낄 수도 있습니다. 그래서 더 간단하게 하는 방법으로 바벨의 transform-class-properties 문법을 사용하여 화살표 함수 형태로 메서드를 정의하는 것입니다.  
```javascript
(...)
handleChange = (e) => {
  this.setState({
    message: e.target.value
  });
}

handleClick = () => {
  alert(this.state.message);
  this.setState({
    message: ''
  });
}
(...)
```
<br>

**input 여러 개 다루기**  
input이 여러 개일 때는 event 객체를 활요하는 것입니다. e.target.name 값을 사용하여 state를 설정하면 쉽게 해결할 수 있습니다.  
```javascript
(...)
state = {
  username: '',
  message: ''
};

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

handleClick = () => {
  alert(this.state.username + ": " + this.state.message);
  this.setState({
    username: '',
    message: ''
  });
}

(...)
      <input
        type="text"
        name="username"
        placeholder="username"
        value={this.state.username}
        onChange={this.handleChange}
      />
      <input
        (...)
        value={this.state.message}
        onChange={this.handleChange}
      />
(...)
```
객체 안에서 key를 \[ \]로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됩니다.  

**onKeyPress 이벤트 핸들링**  
키를 눌렀을 때 발생하는 KeyPress 이벤트를 처리하는 방법을 알아보겠습니다.  
```javascript
(...)
handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    this.handleClick();
  }
}
(...)
      <input
        type="text"
        type="message"
        (...)
        onKeyPress={this.handleKeyPress}
      />
(...)
```

**함수형 컴포넌트로 구현해 보기**
```javascript
(...)
const [username, setUsername] = useState('');
const [message, setMessage] = useState('');
const onChangeUsername = e => setUsername(e.target.value);
const onChangeMessage = e => setMessage(e.target.value);
const onClick = () => {
  alert(username + ': ' + message);
  setUsername('');
  setMessage('');
};
const onKeyPress = e => {
  if (e.key === 'Enter') {
    onClick();
  }
};
(...)
```
이번에는 useState를 통해 사용하는 상태에 문자열이 아닌 객체를 넣어 보겠습니다.  
```javascript
(...)
const [form, setForm] = useState({
  username: '',
  message: ''
});
const { username, message } = form;
const onChange = e => {
  const nextForm = {
    ...form,
    [e.target.name]: e.target.value
  };
  setForm(nextForm);
};
(...)
```

## ref
ref는 HTML에서 id를 사용하여 DOM에 이름을 다는 것처럼 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법입니다.  
ref는 DOM을 꼭 직접적으로 건드려야 할 때 사용해야 합니다. 아래는 state만으로 해결할 수 없어서 ref를 사용해야 하는 상황입니다.
- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기 등

**콜백 함수를 통한 ref 설정**  
ref를 만드는 가장 기본적인 방법은 콜백 함수를 사용하는 것입니다. ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달해 주면 됩니다. 이 콜백 함수는 ref 값을 파라미터로 전달받습니다. 그리고 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정해 줍니다.  
```javascript
<input ref={(ref) => {this.input=ref}} />
```
이렇게 하면 앞으로 this.input은 input 요소의 DOM을 가리킵니다. ref의 이름은 원하는 것으로 자유롭게 지정할 수 있습니다. DOM 타입과 관계없이 this.jeong = ref처럼 마음대로 지정합니다.  

**createRef를 통한 ref 설정**  
ref를 만드는 또 다른 방법은 리액트에 내장되어 있는 createRef라는 함수를 사용하는 것입니다.  
createRef를 사용하여 ref를 만들려면 우선 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아 주어야 합니다. 그리고 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어 주면 ref 설정이 완료됩니다.  
```javascript
(...)
input = React.createRef();

handleFocus = () => {
  this.input.current.focus();
}

render() {
  return (
    <div>
      <input ref={this.input} />
    </div>
  );
}
(...)
```
설정한 뒤 나중에 ref를 설정해 준 DOM에 접근하려면 this.input.current를 조회하면 됩니다. 콜백 함수를 사용할 때와 다른 점은 이렇게 뒷부분에 .current를 넣어 주어야 한다는 것입니다.  

**컴포넌트에 ref 달기**  
리액트에서는 컴포넌트에도 ref를 달 수 있습니다. 이 방법은 주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 씁니다.
```javascript
<MyComponent
  ref={(ref) => {this.myComponent=ref}}
/>
```
이렇게 하면 MyComponent 내부의 메서드 및 멤버 변수에도 접근할 수 있습니다. 즉, 내부의 ref에도 접근할 수 있습니다.  
