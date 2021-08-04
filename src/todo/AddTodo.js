import React from 'react';
import './AddTodo.css';

export default function AddTodo ({onCreate}) {
    const [value, setValue] = React.useState('');

    function submitHandler (event) {
        event.preventDefault ();
        if (value.trim() !== "") onCreate (value);
        setValue('');
    }

    return (
        <form onSubmit = {submitHandler}>
            <input value = {value} onChange = {event => setValue(event.target.value)}/>
            <button type="submit">Добавить</button>
        </form>   
    )
}