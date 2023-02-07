import AppRouter from './AppRouter'
import { AuthContext } from './components/posts-app/context/context'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
	const [isAuth, setIsAuth] = useState(false)

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true)
		}
	}, [])
	console.log(isAuth)
	return (
		<div className='App'>
			<AuthContext.Provider value={{ isAuth, setIsAuth }}>
				<AppRouter />
			</AuthContext.Provider>
		</div>
	)
}

export default App
