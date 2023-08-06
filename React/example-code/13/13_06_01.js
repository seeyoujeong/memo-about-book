import React, { Component } from 'react';

class HistorySample extends Component {
    handleGoBack = () => {
        this.props.history.goBack();
    };

    handleGoHome = () => {
        this.props.history.push('/');
    };

    componentDidMount() {
        this.unblock = this.props.history.block('정말 떠나실 건가요?');
    }

    componentWillUnmount() {
        if (this.unblock) {
            this.unblock();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        );
    }
}

export default HistorySample;

// const HistorySample = ({ history }) => {
//     const unblock = useRef();
    
//     const handleGoBack = () => {
//         history.goBack();
//     };

//     const handleGoHome = () => {
//         history.push('/');
//     };

//     useEffect(() => {
//        unblock.current = history.block('정말 떠나실 건가요?');
//     });

//     useEffect(() => {
//         return () => {
//             if (unblock.current) {
//                 unblock.current();
//             }
//         };
//     }, []);

//     return (
//         <div>
//             <button onClick={handleGoBack}>뒤로</button>
//             <button onClick={handleGoHome}>홈으로</button>
//         </div>
//     );
// };


// ComponentWillUnmount 2021
// useLayoutEffect(() => {
//     return () => {
//         // Your code here.
//     }
// }, [])