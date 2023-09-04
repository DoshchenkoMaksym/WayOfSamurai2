import dialog from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './MessageItem/Message';
import React from 'react';


export const Dialogs = (props) => {
    
    let onSendMessage = () => {

        props.sendMessage();

    };

    let onTextChange = (e) => {

        let text = e.target.value;

        props.updateMessageText(text)
    }

    let dialogsElements = props.dialogsData.map(obj => <DialogItem name={obj.name} id={obj.id} />);

    let messagesElements = props.messagesData.map(obj => <Message message={obj.message} id={obj.id} />);

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
                        value={props.newMessageText}
                        onChange={onTextChange} />
                </div>
                <div>
                    <button
                        onClick={onSendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}