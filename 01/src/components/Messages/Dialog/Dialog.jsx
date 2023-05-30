import { NavLink } from 'react-router-dom'
import s from './Dialog.module.css'

const Dialog = (props) => {

    const setActive = (props) => props.isActive ? s.active : s.item

    return (
        <div className={s.dialog}>
            <NavLink className={setActive} to={props.id}><img src={props.img_link} alt=''/></NavLink>
            <NavLink to={props.id} className={setActive}>{props.username}</NavLink>
        </div>
    )
}

export default Dialog