import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = (props) => {

    let posts = props.postsData.map((el) => {
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