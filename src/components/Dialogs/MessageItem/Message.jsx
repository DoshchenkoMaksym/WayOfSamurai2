import  message from './MessageItems.module.css'

export const Message = (props) => {
    return (
        <div className={message.message}>
            {props.message}
        </div>
    )
}