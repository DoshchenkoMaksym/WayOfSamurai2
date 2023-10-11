const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT = 'NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    postsData: [
        { id: 1, message: 'hi, how are you', likesCount: 26 },
        { id: 2, message: 'It\' my first post', likesCount: 1 },
        { id: 3, message: 'fourths message', likesCount: 34 },
        { id: 4, message: 'ahahaha', likesCount: 3 },
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:

            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };

        case NEW_POST_TEXT:

            return {
                ...state,
                newPostText: action.newText
            };
            case SET_USER_PROFILE:
                return {
                    ...state,
                    profile: action.profile
                }
        default:
            return state;
    }

};

export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const newTextActionCreator = (text) => ({ type: NEW_POST_TEXT, newText: text });
