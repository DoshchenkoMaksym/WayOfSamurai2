import { Posts } from './MyPosts/Posts'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'


export const Profile = (props) => {
    
    return (
        <div>
            <ProfileInfo />
            <Posts
                profilePage={props.state}
                dispatch={props.dispatch}
                 />
        </div>
    )
}