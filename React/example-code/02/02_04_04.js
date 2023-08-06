import React from 'react';

function App() {
    const name = '리웩트';
    const number = 0;

    // return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>;
    return (
        <>
            <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>
            {/* falsy한 값인 0은 예외적으로 화면에 나타난다. */}
            {number && <div>내용</div>}
        </>
    );
}

export default App;