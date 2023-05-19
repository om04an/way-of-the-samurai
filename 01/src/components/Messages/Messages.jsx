import { NavLink } from 'react-router-dom'
import s from './Messages.module.css'

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={props.id}>{props.username}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className="message">{props.text}</div>
    )
}

const Messages = () => {

    let dialogsData = [
        { id: '1', username: 'User 1' },
        { id: '2', username: 'User 2' },
        { id: '3', username: 'User 3' },
        { id: '4', username: 'User 4' }
    ]

    let messagesData = [
        { id: 1, text: 'Hello' },
        { id: 2, text: 'World!' }
    ]

    return (
        <div className={s.messages}>
            <div className={s.dialogs}>
                <Dialog username={dialogsData[0].username} id={dialogsData[0].id} />
                <Dialog username={dialogsData[1].username} id={dialogsData[1].id} />
            </div>
            <div className={s.chat}>
                <Message text={messagesData[0].text} />
                <Message text={messagesData[1].text} />
            </div>
        </div>
    )
}

export default Messages