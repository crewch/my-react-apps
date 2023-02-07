import React from 'react'
import TodoButton from './UI/TodoButton'
import style from './Todo.module.css'
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'

function Todo({ item, deleteTodo, doneTodo }) {
	return (
		<div className={!item.isDone ? style.todo : style.completedTodo}>
			<div className={style.text}>
				<RiTodoFill className={style.todoIcon} />
				<p>{item.body}</p>
			</div>
			<div>
				<TodoButton style={style.deleteIcon} func={deleteTodo} id={item.id}>
					<RiDeleteBin2Line />
				</TodoButton>
				<TodoButton style={style.checkIcon} func={doneTodo} id={item.id}>
					<FaCheck />
				</TodoButton>
			</div>
		</div>
	)
}

export default Todo
