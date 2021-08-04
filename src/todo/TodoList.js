import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

export default function TodoList (props) {
    return (
    <ul>
        {props.listTodo.map ((todo, index) => {
            return <TodoItem todo={todo} key={todo.id} index={index} onChangeItem={props.onToggle}/>
        })}        
    </ul>
    )
}