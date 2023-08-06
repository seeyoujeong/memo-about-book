import React from "react";
import { withRouter } from "react-router-dom";

const WithRouterSample = ({ location, match, history }) => {
    return (
        <div>
            <h4>location</h4>
            <textarea
                value={JSON.stringify(location, null, 2)}
                rows={7}
                readOnly={true}
            />

            <h4>match</h4>
            <textarea
                value={JSON.stringify(match, null, 2)}
                rows={7}
                readOnly={true}
            />
            <br />
            <button onClick={() => history.push('/')}>홈으로</button>
        </div>
    );
};

export default withRouter(WithRouterSample);

// Profile.js
// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import WithRouterSample from './WithRouterSample';

// const data = {
//     unexistentman: {
//         name: '정찬욱',
//         description: '리액트를 좋아하는 개발자'
//     },
//     gildong: {
//         name: '홍길동',
//         description: '고전 소설 홍길동전의 주인공'
//     }
// };

// const Profile = ({ match }) => {
//     const { username } = match.params;
//     const profile = data[username];
//     if (!profile) {
//         return <div>존재하지 않는 사용자입니다.</div>;
//     }
//     return (
//         <div>
//             <h3>
//                 {username}({profile.name})
//             </h3>
//             <p>{profile.description}</p>
//             <WithRouterSample />
//         </div>
//     );
// };

// export default withRouter(Profile);