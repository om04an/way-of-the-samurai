import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://wallpaperaccess.com/full/328218.jpg' alt='los-angelea' />
            </div>
            <div>
                ava + description
            </div>
                <div>
                    my post
                <div>
                    new post
                </div>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    )
}

export default Profile;