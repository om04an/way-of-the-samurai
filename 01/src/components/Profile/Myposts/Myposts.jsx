import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = () => {

    let postsData = [
        { id: 1, text: 'Hello', likes: '34' },
        { id: 2, text: 'World!', likes: '61' }
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post text={postsData[0].text} like={postsData[0].likes} />
                <Post text={postsData[1].text} like={postsData[1].likes} />
             </div>
        </div>
    )
}

export default Myposts;