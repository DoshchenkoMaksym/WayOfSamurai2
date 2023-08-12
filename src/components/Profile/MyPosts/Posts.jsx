import { Post } from './Post/Post'
import posts from './Posts.module.css'


export const Posts = (props) => {
    return (
        <div className={posts.content}>My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={posts.posts}>
                {props.postsData.map(obj => <Post message={obj.message} likesCount={obj.likesCount} />)}
            </div>
        </div>
    )
}