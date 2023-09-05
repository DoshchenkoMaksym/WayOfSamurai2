import { addPostActionCreator, newTextActionCreator } from '../../../redux/profileReducer';
import { Posts } from './Posts';
import { connect } from 'react-redux';

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            
            let action = newTextActionCreator(text);
            
            dispatch(action);
            
        },
        addPost: () => {
            let action = addPostActionCreator()
            dispatch(action);
            
        }
    }
};

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}
export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);