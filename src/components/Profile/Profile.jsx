import { Posts } from './MyPosts/Posts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'


export const Profile = (props) => {
    debugger
    return (
        <div>
            <ProfileInfo />
            <Posts 
            state={props} />
        </div>
    )
}