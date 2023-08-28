const ADD_POST = 'ADD-POST';

const NEW_POST_TEXT = 'NEW-POST-TEXT';

const NEW_MESSAGE_TEXT = 'NEW_MESSAGE_TEXT';

const SEND_MESSAGE = 'SEND_MESSAGE';

export let store = {

    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'hi, how are you', likesCount: 26 },
                { id: 2, message: 'It\' my first post', likesCount: 1 },
                { id: 3, message: 'fourths message', likesCount: 34 },
                { id: 4, message: 'ahahaha', likesCount: 3 },
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogsData: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Valerya' },
                { id: 5, name: 'Tanya' },
                { id: 6, name: 'Victor' }
            ],
            messagesData: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'How is your it?' },
                { id: 3, message: 'Alright?' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
                { id: 6, message: 'Yo' }
            ],
            newMessageText: '',
        },
        sideBar: {
            friendsData: [
                {
                    id: 1,
                    name: 'Andrew',
                    img: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png'
                },
                {
                    id: 2,
                    name: 'Sasha',
                    img: 'https://w7.pngwing.com/pngs/420/567/png-transparent-avatar-male-man-portrait-avatars-xmas-giveaway-icon-thumbnail.png'
                },
                {
                    id: 2,
                    name: 'Sveta',
                    img: 'https://w7.pngwing.com/pngs/224/408/png-transparent-avatar-child-girl-kid-avatars-xmas-giveaway-icon.png'
                }
            ]
        }
    },
    callSubscriber() {

        return null

    },

    getState() {

        return this._state

    },
    subscribe(observer) {

        this._callSubscriber = observer;

    },


    dispatch(action) {

        if (action.type === ADD_POST) {
            
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.postsData.push(newPost);

            this._state.profilePage.newPostText = '';

            this._callSubscriber(this._state);

        } else if (action.type === NEW_POST_TEXT) {

            this._state.profilePage.newPostText = action.newText;

            this._callSubscriber(this._state);

        } else if (action.type === NEW_MESSAGE_TEXT) {

            this._state.messagesPage.newMessageText = action.newMessage;

            this._callSubscriber(this._state);
            
        } else if (action.type === SEND_MESSAGE) {
            
            let newMessage = {
                id: 7,
                message: this._state.messagesPage.newMessageText
            };
            
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
            
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const newTextActionCreator = (text) => ({ type: NEW_POST_TEXT, newText: text });

export const newMessageActionCreator = (message) => ({ type: NEW_MESSAGE_TEXT, newMessage: message })

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE })
