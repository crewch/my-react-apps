import style from './Menu.module.css';
import logo from '../../imgs/to-do-list.png';
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <nav className={style.nav}>
            <img alt="logo" src={logo} style={{ padding: '5px' }} />
            <div className={style.backgroundBtn}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? style.active : style.noactive
                    }
                    to="."
                >
                    Home
                </NavLink>
            </div>
            <div className={style.backgroundBtn}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? style.active : style.noactive
                    }
                    to="posts"
                >
                    Posts
                </NavLink>
            </div>
            <div className={style.backgroundBtn}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? style.active : style.noactive
                    }
                    to="todos"
                >
                    Todos
                </NavLink>
            </div>
        </nav>
    );
}

export default Menu;
