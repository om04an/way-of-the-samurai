import { NavLink } from 'react-router-dom'
import s from './Dialog.module.css'

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={props.id}>{props.username}</NavLink>
        </div>
    )
}

export default Dialog