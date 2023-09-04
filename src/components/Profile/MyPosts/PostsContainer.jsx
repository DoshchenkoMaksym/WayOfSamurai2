import React from 'react';
import { addPostActionCreator, newTextActionCreator } from '../../../redux/profileReducer';
import { Posts } from './Posts';

export const PostsContainer = (props) => {
    
    let state = props.store.getState();

    let addPost = () => {

        let action = addPostActionCreator();

        props.store.dispatch(action);

    };

    let postChange = (text) => {

        let action = newTextActionCreator(text);

        props.store.dispatch(action)

    };

    return <Posts
        updateNewPostText={postChange}
        addPost={addPost}
        posts={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText} />
}