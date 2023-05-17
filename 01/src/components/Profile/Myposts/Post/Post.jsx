import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt='avatar' src='https://i.pinimg.com/736x/80/17/86/80178693d1d0c7e0ec688707b02ecc0b.jpg' />
            {props.text}
            <div>
                <span>
                    likes: {props.like}
                </span>
            </div>
        </div>
    )
}

export default Post;