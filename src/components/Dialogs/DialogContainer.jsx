import React from 'react';
import { newMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer';
import { Dialogs } from './Dialogs';

export const DialogsContainer = (props) => {

    let state = props.store.getState();

    let sendMessage = () => {

        props.store.dispatch(addMessageActionCreator());

    }

    let updateMessageText = (text) => {

        let action = newMessageTextActionCreator(text)

        props.store.dispatch(action)
    }

    return <Dialogs 
    updateMessageText={updateMessageText}
    sendMessage={sendMessage}
    newMessageText={state.messagesPage.newMessageText}
    dialogsData={state.messagesPage.dialogsData}
    messagesData={state.messagesPage.messagesData}/>
}