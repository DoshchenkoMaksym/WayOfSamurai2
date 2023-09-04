import React, { useContext } from 'react';
import { newMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';
import { Dialogs } from './Dialogs';
import { StoreContext } from '../../storeContext';

export const DialogsContainer = () => {
    let store = useContext(StoreContext);

    let state = store.getState();

    let sendMessage = () => {

        store.dispatch(addMessageActionCreator());

    }

    let updateMessageText = (text) => {

        let action = newMessageTextActionCreator(text)

        store.dispatch(action)
    }

    return (
        <Dialogs
            updateMessageText={updateMessageText}
            sendMessage={sendMessage}
            newMessageText={state.messagesPage.newMessageText}
            dialogsData={state.messagesPage.dialogsData}
            messagesData={state.messagesPage.messagesData} />

    )
}