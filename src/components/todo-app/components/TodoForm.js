import React, { useState } from 'react';
import style from './TodoForm.module.css';

function TodoForm({ addTodo }) {
    const [body, setBody] = useState('');

    function onChange(e) {
        setBody(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        addTodo(body);
        setBody('');
    }

    return (
        <form onSubmit={onSubmit} className={style.form}>
            <input
                type="text"
                placeholder="Enter new todo"
                value={body}
                onChange={onChange}
                className={style.ipt}
            ></input>
            <button type="submit" className={style.btn}>
                Submit
            </button>
        </form>
    );
}

export default TodoForm;
