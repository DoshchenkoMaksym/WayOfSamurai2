import { Posts } from './MyPosts/Posts'
import profile from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'


export const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <Posts postsData={props.state.postsData} />
        </div>
    )
}