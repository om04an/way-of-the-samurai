// Импорт
import s from './Nav.module.css'
import { NavLink } from 'react-router-dom';

// Компонента
const Nav = () => {

    // setActive меняет css стиль, если елемент выбран, то выбирает ( s.active ), в противном же случае ( s.item )
    const setActive = (props) => props.isActive ? s.active : s.item

    return (
        <nav className={s.nav}>
            <div>
                {/* Navlink это аналог тега <a>, но с одним отличием, он изменяет адресную строку без перезагруки страницы.
                    параметр to хронит относительный путь к странице ( ../profile ) */}
                <NavLink to='/profile' className={setActive}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/messages' className={setActive}>Messages</NavLink>
                </div>
            <div>
                <NavLink to='/news' className={setActive}>News</NavLink>
                </div>
            <div>
                <NavLink to='/music' className={setActive}>Music</NavLink>
                </div>
            <div>
                <NavLink to='/settings' className={setActive}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav;