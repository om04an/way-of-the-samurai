import { rerenderEntireTree } from '../render'

let state = {
    profilePage: {
        postsData: [
            { id: 1, text: 'Hello', likes: '34' },
            { id: 2, text: 'World!', likes: '61' },
        ],
        newPostText: '',
    },
    messagesPage: {
        dialogsData: [
            { id: '1', username: 'User 1', img_link: 'https://i.pinimg.com/736x/9d/37/df/9d37df0942ddbd40d87ff258675d867d.jpg' },
            { id: '2', username: 'User 2', img_link: 'https://i.pinimg.com/736x/14/df/bf/14dfbf0e75988b5daa3aaccddba0eb6d.jpg' },
            { id: '3', username: 'User 3', img_link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxO2fkfsApuPVWtYE475-AaiMBkZmK8TA8A&usqp=CAU' },
            { id: '4', username: 'User 4', img_link: 'https://i.pinimg.com/originals/14/15/14/141514f93aaf19e779f2fd99bace185f.jpg' }
        ],
        messagesData: [
            { id: 1, text: 'Hello' },
            { id: 2, text: 'World!' },
        ],
        newMessageText: 'New text message',
    },
}

// Функция для добавления нового поста
export let addPost = () => {
    let newPost = {
        id: 3,
        text: state.profilePage.newPostText,
        likes: 0,
    }

    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

// Функция для добавления нового сообщения
export let addMessage = () => {
    let newMessage = {
        id: 3,
        text: state.messagesPage.newMessageText,
    }

    state.messagesPage.messagesData.push(newMessage)
    state.messagesPage.newMessageText = ''
    rerenderEntireTree(state)
}

// Функция для изменения текста в textarea в myposts
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

// Функция для изменения текста в textarea в messages
export let updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText
    rerenderEntireTree(state)
}

export default state