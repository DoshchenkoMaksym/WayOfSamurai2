import profileInfo from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <img alt="" className={profileInfo.img} src="https://klike.net/uploads/posts/2022-09/1662533191_g-1.jpg" />
            <div className={profileInfo.description}>ava + desription</div>
        </div>
    )
}