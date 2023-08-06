import React from 'react';
import './App.css';

function App() {
    const name = '리액트';
    return (
        <>
            <div className="react">{name}</div>
            {/* 
            <input> error
            */}
            <input></input>
            <input />
        </>
    );
}

export default App;