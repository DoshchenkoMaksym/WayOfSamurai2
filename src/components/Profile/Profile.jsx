import { Posts } from './MyPosts/Posts'
import profile from './Profile.module.css'


export const Profile = () => {
    return (
        <div className={profile.content}>
            <img alt="" className={profile.img} src="https://klike.net/uploads/posts/2022-09/1662533191_g-1.jpg" />
            <div>ava + desription</div>
            <Posts />
        </div>
    )
}