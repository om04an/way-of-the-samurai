import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.background}>
                <img src='https://wallpaperaccess.com/full/328218.jpg' alt='los-angelea' />
            </div>
            <div className={s.info}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo