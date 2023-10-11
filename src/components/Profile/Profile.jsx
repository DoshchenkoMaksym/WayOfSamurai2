import { PostsContainer } from './MyPosts/PostsContainer'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'


export const Profile = (props) => {
    
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer/>
        </div>
    )
}