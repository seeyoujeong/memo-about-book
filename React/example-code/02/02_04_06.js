import React from 'react';

function App() {
    const name = '리액트';
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16 // 단위 생략시 px
    };

    return <div style={style}>{name}</div>;

    // return (
    //     <div
    //         style={{
    //             backgroundColor: 'black',
    //             color: 'aqua',
    //             fontSize: '48px',
    //             fontWeight: 'bold',
    //             padding: 16
    //         }}
    //     >
    //         {name}
    //     </div>
    // );
}

export default App;