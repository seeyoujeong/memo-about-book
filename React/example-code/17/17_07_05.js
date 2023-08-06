import React from 'react';
import { useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import useActions from '../lib/useActions';

const TodosContainer = () => {
    const { input, todos } = useSelector(({ todos }) => ({
        input: todos.input,
        todos: todos.todos
    }));
    
    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove],
        []
    );

    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

export default TodosContainer;

// useActions.js
// import { bindActionCreators } from "redux";
// import { useDispatch } from "react-redux";
// import { useMemo } from "react";

// export default function useActions(actions, deps) {
//     const dispatch = useDispatch();
//     return useMemo(
//         () => {
//             if (Array.isArray(actions)) {
//                 return actions.map(a => bindActionCreators(a, dispatch));
//             }
//             return bindActionCreators(actions, dispatch);
//         },
//         deps ? [dispatch, ...deps] : deps
//     );
// }