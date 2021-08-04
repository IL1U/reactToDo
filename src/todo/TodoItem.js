import React from 'react';
import './TodoItem.css';
import Context from "../context";

export default function TodoItem ({todo, index, onChangeItem}) {
    const {remove} = React.useContext(Context);
    return (
        <li>
            <span className={todo.status ? "finish" : ""}>
                <input type="checkbox" checked={todo.status} onChange={() => onChangeItem(todo.id)}/>
                <strong>{index+1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button onClick={() => remove (todo.id)}>&times;</button>
        </li>
    )
}