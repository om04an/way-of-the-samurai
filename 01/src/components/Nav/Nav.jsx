import s from './Nav.module.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {

    const setActive = (props) => props.isActive ? s.active : s.item

    return (
        <nav className={s.nav}>
            <div>
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