import s from './Messages.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/Dialog'
import React from 'react'


const Messages = (props) => {
    
    let dialogs = props.state.dialogsData.map((el) => {
        return <Dialog username={el.username} id={el.id} img_link={el.img_link} />
    })

    let messages = props.state.messagesData.map((el) => {
        return <Message text={el.text} />
    })

    let newMessageElement = React.createRef()

    let addMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }

    return (
        <div className={s.messages}>
            <div className={s.dialogs}>
                {dialogs}
            </div>
            <div className={s.chat}>
                {messages}
                <div>
                    <textarea ref={ newMessageElement }></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Messages