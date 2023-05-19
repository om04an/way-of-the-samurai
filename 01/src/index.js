import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, text: 'Hello', likes: '34' },
  { id: 2, text: 'World!', likes: '61' }
]

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} messagesData={messagesData} dialogsData={dialogsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
