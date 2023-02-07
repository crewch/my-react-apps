import style from './Menu.module.css'
import logo from '../../imgs/to-do-list.png'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../posts-app/context/context'

function Menu() {
	const { setIsAuth } = useContext(AuthContext)

	return (
		<nav className={style.nav}>
			<img alt='logo' src={logo} style={{ padding: '5px' }} />
			<div className={style.backgroundBtn}>
				<NavLink
					className={({ isActive }) =>
						isActive ? style.active : style.noactive
					}
					to='.'
				>
					Home
				</NavLink>
			</div>
			<div className={style.backgroundBtn}>
				<NavLink
					className={({ isActive }) =>
						isActive ? style.active : style.noactive
					}
					to='posts'
				>
					Posts
				</NavLink>
			</div>
			<div className={style.backgroundBtn}>
				<NavLink
					className={({ isActive }) =>
						isActive ? style.active : style.noactive
					}
					to='todos'
				>
					Todos
				</NavLink>
			</div>
			<div className={style.backgroundBtn}>
				<NavLink
					className={style.noactive}
					onClick={() => {
						localStorage.removeItem('auth')
						setIsAuth(false)
					}}
				>
					Exit
				</NavLink>
			</div>
		</nav>
	)
}

export default Menu
