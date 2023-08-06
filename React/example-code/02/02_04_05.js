import React from 'react';
import './App.css';

function App() {
    const name = undefined;
    // undefined만 반환하여 렌더링하는 상황을 만들면 안된다.
    // return name;

    // JSX 내부에서 undefined를 렌더링하는 것은 괜찮다.
    // return <div>{name}</div>;

    return <div>{name || '리액트'}</div>;
}

export default App;