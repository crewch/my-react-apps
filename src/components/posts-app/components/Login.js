import Input from './UI/Input'
import CreatePostButton from './UI/CreatePostButton'
import style from './Login.module.css'
import { useContext } from 'react'
import { AuthContext } from '../context/context'

function Login() {
	const { setIsAuth } = useContext(AuthContext)

	function submit(e) {
		e.preventDefault()
		setIsAuth(true)
		localStorage.setItem('auth', true)
	}

	return (
		<div className={style.post}>
			<h1>Логин</h1>
			<form onSubmit={submit}>
				<Input text='Login' className={style.input} type='text' />
				<Input text='Password' className={style.input} type='password' />
				<CreatePostButton text='Login' className={style.btn} />
			</form>
		</div>
	)
}

export default Login
