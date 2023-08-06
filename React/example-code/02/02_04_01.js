import React, { Fragment } from 'react';

function App() {
    return (
        // 반드시 부모 요소 하나로 감싸야 한다.
        // <>
        <Fragment> 
            <h1>리액트 안녕</h1>
            <h2>잘 작동하니?</h2>
        </Fragment>  // </>  
    );
}

export default App;