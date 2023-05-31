// Импорт
import s from './Message.module.css'

// Компонента
const Message = (props) => {

    return (
        <div className={s.message}>{props.text}</div>
    )
}

// Экспорт
export default Message