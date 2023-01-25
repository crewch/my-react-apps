import TodoForm from './components/TodoForm';
import TodoActions from './components/TodoActions';
import List from './components/List';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [list, setList] = useState([]);

    function addTodo(body) {
        setList(list.concat({ id: uuidv4(), body: body, isDone: false }));
    }

    function deleteList() {
        setList([]);
    }

    function deleteIsDone() {
        setList(list.filter((post) => post.isDone === false));
    }

    function deleteTodo(id) {
        setList(list.filter((post) => post.id !== id));
    }

    function doneTodo(id) {
        setList(
            list.filter((post) => {
                if (post.id === id) {
                    post.isDone = true;
                }

                return post;
            })
        );
    }

    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
            <h1 style={{ textAlign: 'center' }}>Todo App</h1>
            <TodoForm addTodo={addTodo} />
            <TodoActions deleteList={deleteList} deleteIsDone={deleteIsDone} />
            {list.length === 0 ? (
                <h1 style={{ textAlign: 'center' }}>No issues</h1>
            ) : (
                <List list={list} deleteTodo={deleteTodo} doneTodo={doneTodo} />
            )}
        </div>
    );
}

export default App;
