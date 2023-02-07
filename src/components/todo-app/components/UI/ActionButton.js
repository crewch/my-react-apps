import React from 'react'

function ActionButton({ func, style, children }) {
	return (
		<button onClick={func} className={style}>
			{children}
		</button>
	)
}

export default ActionButton
