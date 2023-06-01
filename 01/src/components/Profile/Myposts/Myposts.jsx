import s from './Myposts.module.css';
import Post from './Post/Post';
import React from 'react';

const Myposts = (props) => {

    let posts = props.postsData.map((el) => {
        return <Post text={el.text} like={el.likes} />
    })

    // Создание ссылки на элемент
    let newPostElement = React.createRef()

    // Вызывается при клике на кнопку с помощью onClick
    let addPost = () => {
        props.addPost()
    }

    // Вызывается при изменение в textarea с помощью onChange
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default Myposts;