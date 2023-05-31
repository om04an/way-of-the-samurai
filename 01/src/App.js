// Импорт
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Компонента App 
// Props хранит данные которые были переданы тегу <app .../>
const App = (props) => {
  return (
    // <BrowserRouter> сохраняет текущее местоположение в адресной строке
    <BrowserRouter>
      <div className='app-wrapper'>

        {/* Компоненты Header Nav ...*/}
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>

            {/* Route отслеживает изменения в адресной строке и как только адрес в адресной строке совпадает с путём в path, 
                Route вызывает компоненту которая лежит в element */}
            <Route path='/messages/*' element={<Messages state={props.state.messagesPage} />} />
            <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost}/>} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />

          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

// Экспорт компоненты ( без экспорта компоненту нельзя будет импортировать )
export default App;
