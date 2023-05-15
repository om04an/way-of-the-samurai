import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://www.clipartmax.com/png/full/122-1225327_one-piece-anime-logo-one-piece-logo-png.png' alt='logo' />
      </header>
      <nav className='nav'>
        <div><a href='#s'>Profile</a></div>
        <div><a href='#s'>Messages</a></div>
        <div><a href='#s'>News</a></div>
        <div><a href='#s'>Music</a></div>
        <div><a href='#s'>Settings</a></div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://wallpaperaccess.com/full/328218.jpg' alt='los-angelea' />
        </div>
        <div>
          ava + description
        </div>
        <div>
          my post
          <div>
            new post
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
