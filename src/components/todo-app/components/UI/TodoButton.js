import React from 'react'

function TodoButton({ func, style, id, children }) {
	return (
		<button onClick={() => func(id)} className={style}>
			{children}
		</button>
	)
}

export default TodoButton
