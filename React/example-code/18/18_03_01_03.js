import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increase());
    }, 1000);
};
export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease());
    }, 1000);
};

const initialState = 0;

const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1
    },
    initialState
);

export default counter;

// CounterContainer.js
// import React from 'react';
// import { connect } from 'react-redux';
// import { increaseAsync, decreaseAsync } from '../modules/counter';
// import Counter from '../components/Counter';

// const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
//     return (
//         <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync} />
//     );
// };

// export default connect(
//     state => ({
//         number: state.counter
//     }),
//     {
//         increaseAsync,
//         decreaseAsync
//     }
// )(CounterContainer);