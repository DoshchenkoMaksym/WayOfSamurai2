const NEW_MESSAGE_TEXT = 'NEW_MESSAGE_TEXT';

const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:

            let body = state.newMessageText;

            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, { id: 7, message: body }]
            };

        case NEW_MESSAGE_TEXT:

            return {
                ...state,
                newMessageText: action.newMessage
            };

        default:
            return state;

    }
}

export default dialogsReducer;

export const newMessageTextActionCreator = (message) => ({ type: NEW_MESSAGE_TEXT, newMessage: message })

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE })