import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFoundLogin() {
	const navigator = useNavigate()

	useEffect(() => {
		navigator('/login')
	}, [navigator])
}

export default NotFoundLogin
