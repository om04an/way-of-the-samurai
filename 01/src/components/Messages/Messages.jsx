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
        <div className={s.message}>{props.text}</div>
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

    let dialogs = dialogsData.map((el) => {
        return <Dialog username={el.username} id={el.id} />
    })

    let messages = messagesData.map((el) => {
        return <Message text={el.text} />
    })

    return (
        <div className={s.messages}>
            <div className={s.dialogs}>
                {dialogs}
            </div>
            <div className={s.chat}>
                {messages}
            </div>
        </div>
    )
}

export default Messages