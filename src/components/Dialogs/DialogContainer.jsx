import { newMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (text) => {
            let action = newMessageTextActionCreator(text)
            dispatch(action)
        },
        sendMessage: () => {
            let action = addMessageActionCreator()
            dispatch(action);
        }
    }
};

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);