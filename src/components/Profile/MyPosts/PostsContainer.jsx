import React, { useContext } from 'react';
import { addPostActionCreator, newTextActionCreator } from '../../../redux/profileReducer';
import { Posts } from './Posts';
import { StoreContext } from '../../../storeContext';

export const PostsContainer = () => {
    let store = useContext(StoreContext);

    let state = store.getState();

    let addPost = () => {

        let action = addPostActionCreator();

        store.dispatch(action);

    };

    let postChange = (text) => {

        let action = newTextActionCreator(text);

        store.dispatch(action)

    };
    return (
        <Posts
            updateNewPostText={postChange}
            addPost={addPost}
            posts={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText} />
    )
}