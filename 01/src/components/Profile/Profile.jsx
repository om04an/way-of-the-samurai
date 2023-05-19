import s from './Profile.module.css';
import Myposts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <Myposts />
        </div>
    )
}

export default Profile;