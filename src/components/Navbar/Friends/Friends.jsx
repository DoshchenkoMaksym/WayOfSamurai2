import { FriendItem } from './FriendItem/FriendItem'
import styles from './Friends.module.css'

export const Friends = (props) => {
    let friends = props.state.friendsData.map(obj => <FriendItem name={obj.name} img={obj.img} />)
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Friends
            </div>
            <div className={styles.friendsContainer}>
                {friends}
            </div>
        </div>
    )
}