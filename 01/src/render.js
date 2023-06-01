// Импорт
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, updateNewMessageText, addMessage } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендер App.js внутри тега div с id root в index.html
export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addMessage={addMessage} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} />
        </React.StrictMode>
    );
}