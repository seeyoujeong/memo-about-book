import React from 'react';

const data = {
    unexistentman: {
        name: '정찬욱',
        description: '리액트를 좋아하는 개발자'
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;

// App.js
// const App = () => {
//     return (
//       <div>
//         <ul>
//           <li>
//             <Link to="/">홈</Link>
//           </li>
//           <li>
//             <Link to="/about">소개</Link>
//           </li>
//           <li>
//             <Link to="/profile/unexistentman">unexistentman 프로필</Link>
//           </li>
//           <li>
//             <Link to="/profile/gildong">gildong 프로필</Link>
//           </li>
//         </ul>
//         <hr />
//           <Route path="/" component={Home} exact={true} />
//           <Route path={['/about', '/info']} component={About} />
//           <Route path="/profile/:username" component={Profile} />
//       </div>
//     );
// };