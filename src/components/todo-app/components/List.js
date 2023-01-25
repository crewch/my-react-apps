import React from 'react';
import Todo from './Todo';
import style from './List.module.css';

function List({ list, deleteTodo, doneTodo }) {
    return (
        <div className={style.list}>
            {list.map((item) => {
                return (
                    <Todo
                        key={item.id}
                        item={item}
                        deleteTodo={deleteTodo}
                        doneTodo={doneTodo}
                    />
                );
            })}
        </div>
    );
}

export default List;
