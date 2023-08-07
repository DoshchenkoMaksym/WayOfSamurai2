import { Post } from './Post/Post'
import posts from './Posts.module.css'


export const Posts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message="First message"/>
                <Post message="Second message"/>
            </div>
        </div>
    )
}