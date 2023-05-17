import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = () => {
    return (
        <div>
            my post
            <div>
                new post
            </div>
            <Post text='Hello' like='34' />
            <Post text='World' like='61' />
            <Post text='!' like='8' /> 
        </div>
    )
}

export default Myposts;