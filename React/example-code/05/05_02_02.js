import React, { Component } from 'react';

class RefSample extends Component {
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                {/* createRef를 통한 ref 설정 */}
                <input ref={this.input} />
                
                {/* 콜백 함수를 통한 ref 설정 */}
                <input ref={(ref) => {this.input=ref}} />
            </div>
        );
    }
}

export default RefSample;