import React from 'react'
import ActionButton from './UI/ActionButton'
import style from './TodoActions.module.css'
import { RxUpdate } from 'react-icons/rx'
import { RiDeleteBin2Line } from 'react-icons/ri'

function TodoActions({ deleteList, deleteIsDone }) {
	return (
		<div className={style.buttons}>
			<ActionButton func={deleteList} style={style.deleteAll}>
				<RxUpdate />
			</ActionButton>
			<ActionButton func={deleteIsDone} style={style.deleteDone}>
				<RiDeleteBin2Line />
			</ActionButton>
		</div>
	)
}

export default TodoActions
