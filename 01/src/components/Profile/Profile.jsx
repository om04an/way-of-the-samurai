import s from './Profile.module.css';
import Myposts from './Myposts/Myposts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://wallpaperaccess.com/full/328218.jpg' alt='los-angelea' />
            </div>
            <div>
                ava + description
            </div>
            <Myposts />
        </div>
    )
}

export default Profile;