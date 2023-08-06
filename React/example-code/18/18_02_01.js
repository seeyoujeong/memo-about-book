const loggerMiddleware = store => next => action => {
    console.group(action && action.type);
    console.log('이전 상태', store.getState());
    console.log('액션', action);
    next(action);
    console.log('다음 상태', store.getState());
    console.groupEnd();
};

export default loggerMiddleware;

// index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import rootReducer from './modules';
// import loggerMiddleware from './lib/loggerMiddleware';

// const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();