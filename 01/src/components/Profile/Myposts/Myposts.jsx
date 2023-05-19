import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = () => {

    let postsData = [
        { id: 1, text: 'Hello', likes: '34' },
        { id: 2, text: 'World!', likes: '61' }
    ]

    let posts = postsData.map((el) => {
        return <Post text={el.text} like={el.likes} />
    })

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
                {posts}
            </div>
        </div>
    )
}

export default Myposts;