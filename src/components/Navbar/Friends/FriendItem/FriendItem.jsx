import styles from './FriendItem.module.css'

export const FriendItem = (props) => {
    
    return (
        <div className={styles.friendItem}>
            <div><img src={props.img} alt='' /></div>
            <div>{props.name}</div>
        </div>
    )
}