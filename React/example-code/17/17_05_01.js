import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

const mapStateToProps = state => ({
    number: state.counter.number
});

const mapDispatchToProps = dispatch => ({
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps

    // 익명 함수 형태로 선언할 경우
    // state => ({
    //     number: state.counter.number
    // }),
    // dispatch => ({
    //     increase: () => dispatch(increase()),
    //     decrease: () => dispatch(decrease())
    // })

    // bindActionCreators 유틸 함수를 사용할 경우
    // state => ({
    //     number: state.counter.number
    // }),
    // dispatch => 
    //     bindActionCreators(
    //         {
    //             increase,
    //             decrease
    //         },
    //         dispatch
    //     )

    // 액션 생성 함수로 이루어진 객체 형태로 넣어 주는 경우
    // state => ({
    //     number: state.counter.number
    // }),
    // {
    //     increase,
    //     decrease
    // }
)(CounterContainer);

// App.js
// const App = () => {
//     return (
//       <div>
//         <CounterContainer />
//         <hr />
//         <Todos />
//       </div>
//     );
// };