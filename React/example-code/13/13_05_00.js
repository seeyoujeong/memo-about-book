import React from 'react';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <Link to="/profiles/unexistentman">unexistentman</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong</Link>
                </li>
            </ul>

            <Route
                path="/profiles"
                exact
                render={() => <div>사용자를 선택해 주세요.</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
};

export default Profiles;

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
//             <Link to="/profiles">프로필</Link>
//           </li>
//         </ul>
//         <hr />
//           <Route path="/" component={Home} exact={true} />
//           <Route path={['/about', '/info']} component={About} />
//           <Route path="/profiles" component={Profiles} />
//       </div>
//     );
//   };