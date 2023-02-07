import style from './MyModal.module.css'

function MyModal({ children, modalState, setModalState }) {
	const rootClases = [style.myModal]

	if (modalState) {
		rootClases.push(style.active)
	}

	return (
		<div onClick={() => setModalState(false)} className={rootClases.join(' ')}>
			<div onClick={e => e.stopPropagation()} className={style.myModalContent}>
				{children}
			</div>
		</div>
	)
}

export default MyModal
