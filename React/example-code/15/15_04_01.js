import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
    const { state } = useContext(ColorContext);
    return (
        <>
            <div
                style={{
                    width: '64px',
                    height: '64px',
                    background: state.color
                }}
            />
            <div
                style={{
                    width: '32px',
                    height: '32px',
                    background: state.subcolor
                }}
            />
        </>
    );
};

export default ColorBox;

//SelectColors.js
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const SelectColors = () => {
//     const { actions } = useContext(ColorContext);
//     return (
//         <div>
//             <h2>색상을 선택하세요.</h2>
//             <div style={{ display: 'flex' }}>
//                 {colors.map(color => (
//                     <div
//                         key={color}
//                         style={{
//                             background: color,
//                             width: '24px',
//                             height: '24px',
//                             cursor: 'pointer'
//                         }}
//                         onClick={() => actions.setColor(color)}
//                         onContextMenu={e => {
//                             e.preventDefault();
//                             actions.setSubcolor(color);
//                         }}
//                     />
//                 ))}
//             </div>
//             <hr />
//         </div>
//     );
// };