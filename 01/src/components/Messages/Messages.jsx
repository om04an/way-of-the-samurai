import s from './Messages.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/Dialog'


const Messages = (props) => {
    
    let dialogs = props.state.dialogsData.map((el) => {
        return <Dialog username={el.username} id={el.id} />
    })

    let messages = props.state.messagesData.map((el) => {
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