import dialog from './Dialogs.module.css'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './MessageItem/Message';
import React from 'react';



export const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        
        let text = newMessageElement.current.value;
        
        return (
            alert(text)
        )
    }

    let dialogsElements = props.state.dialogsData.map(obj => <DialogItem name={obj.name} id={obj.id} />);

    let messagesElements = props.state.messagesData.map(obj => <Message message={obj.message} id={obj.id} />);

    return (
        <div className={dialog.dialogs}>
            <div className={dialog.dialogItems}>
                {dialogsElements}
            </div>
            <div className={dialog.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}