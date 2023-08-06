import React, { Component } from 'react';

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0
    //     };
    // }
    state = {
        number: 0,
        fixedNumber: 0
    };

    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    onClick={() => {
                        // 상태가 비동기적으로 업데이트
                        // this.setState({ number: number + 1 });
                        // this.setState({ number: this.state.number + 1});

                        this.setState(prevState => {
                            return {
                                number: prevState.number + 1
                            };
                        });
                        // 위 코드와 아래 코드는 완전히 똑같은 기능
                        // 아래 코드는 함수에서 바로 객체를 반환한다는 의미
                        this.setState(prevState => ({
                            number: prevState.number + 1
                        }));

                        // 아래 코드만 실행됨
                        this.setState(
                            {
                                number: number + 1
                            },
                            () => {
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                            }
                        );
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;