// Импорт
import s from './Messages.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/Dialog'
import React from 'react'

// Компонента
const Messages = (props) => {

    // Цикл для создание jsx кода с помощью данных из props ( в данном случае это диалоги )
    let dialogs = props.state.dialogsData.map((el) => {
        return <Dialog username={el.username} id={el.id} img_link={el.img_link} />
    })

    // Цикл для создание jsx кода с помощью данных из props ( в данном случае это сообщения )
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
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

// Экспорт
export default Messages