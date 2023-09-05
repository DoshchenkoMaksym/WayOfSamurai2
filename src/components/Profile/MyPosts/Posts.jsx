import { Post } from './Post/Post'
import posts from './Posts.module.css'
import React from 'react';

export const Posts = (props) => {
 
    let onAddPost = () => {
        props.addPost()
    };

    let onPostChange = (e) => {
        
        let text = e.target.value;
        props.updateNewPostText(text)
    };

    return (
        <div className={posts.content}>
            <div>
                <div className={posts.postsTitle}>My posts</div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={posts.posts}>
                {props.posts.map(obj => <Post 
                message={obj.message} 
                likesCount={obj.likesCount}/>)}
            </div>
        </div>
    )
}