import { Post } from './Post/Post'
import posts from './Posts.module.css'
import React from 'react';
import { addPostActionCreator, newTextActionCreator } from '../../../redux/state';

export const Posts = (props) => {
    
    let newPostElement = React.createRef();

    let addPost = () => {

        props.dispatch(addPostActionCreator());

    };

    let postChange = (e) => {
        
        let text = e.target.value;

        props.dispatch(newTextActionCreator(text))

    };

    return (
        <div className={posts.content}>
            <div>
                <div className={posts.postsTitle}>My posts</div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.profilePage.newPostText}
                        onChange={postChange} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={posts.posts}>
                {props.profilePage.postsData.map(obj => <Post message={obj.message} likesCount={obj.likesCount} />)}
            </div>
        </div>
    )
}