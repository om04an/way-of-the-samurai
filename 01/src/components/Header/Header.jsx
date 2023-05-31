// Импорт
import s from './Header.module.css';

// Компонента
const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://cdn-icons-png.flaticon.com/512/1370/1370907.png' alt='logo' />
        </header>
    )
}

// Экспорт
export default Header;