import dialog from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './MessageItem/Message';
import React from 'react';
import { newMessageActionCreator, addMessageActionCreator } from '../../redux/state';


export const Dialogs = (props) => {

    let sendMessage = () => {

        props.dispatch(addMessageActionCreator());

    }

    let addMessage = (e) => {

        let message = e.target.value;

        props.dispatch(newMessageActionCreator(message))
    }

    let dialogsElements = props.state.dialogsData.map(obj => <DialogItem name={obj.name} id={obj.id} />);

    let messagesElements = props.state.messagesData.map(obj => <Message message={obj.message} id={obj.id} />);

    return (
        <div className={dialog.dialogs}>
            <div className={dialog.dialogItems}>
                {dialogsElements}
            </div>
            <div className={dialog.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea
                        value={props.state.newMessageText}
                        onChange={addMessage} />
                </div>
                <div>
                    <button
                        onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}