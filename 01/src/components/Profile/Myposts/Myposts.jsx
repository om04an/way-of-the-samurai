import s from './Myposts.module.css';
import Post from './Post/Post';
import React from 'react';

const Myposts = (props) => {

    let posts = props.postsData.map((el) => {
        return <Post text={el.text} like={el.likes} />
    })

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }
    

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default Myposts;