import { Post } from './Post/Post'
import posts from './Posts.module.css'
import React from 'react';

export const Posts = (props) => {
    
    let newPostElement = React.createRef();

    let addPost = () => {

        props.addPostFn();

        newPostElement.current.value = '';
    };

    let postChange = () => {

        let text = newPostElement.current.value;

        props.newPostTextFn(text)

    };

    return (
        <div className={posts.content}>
            <div>
                <div className={posts.postsTitle}>My posts</div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={postChange} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={posts.posts}>
                {props.postsData.map(obj => <Post message={obj.message} likesCount={obj.likesCount} />)}
            </div>
        </div>
    )
}