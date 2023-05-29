import s from './Profile.module.css';
import Myposts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <Myposts postsData={props.state.postsData}/>
        </div>
    )
}

export default Profile;