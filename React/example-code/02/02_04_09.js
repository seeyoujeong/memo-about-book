import React from 'react';
import './App.css';

function App() {
    const name = '리액트';
    return (
        <>
            {/* 주석은 이렇게 작성*/}
            <div
                className="react" // 시작 태그를 여러 줄로 작성시 주석 작성 가능
            >
                {name}
            </div>
            // 주석 불가
            /* 주석 불가 */
            <input />
        </>
    );
}

export default App;