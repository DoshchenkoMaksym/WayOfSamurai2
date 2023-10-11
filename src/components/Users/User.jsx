import styles from './users.module.css'
import UserAvatar from '../../assets/images/avatar-png-11554021819gij72acuim.png'
import { NavLink } from 'react-router-dom';

export let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i)
    };


    return (

        <div className={styles.container}>
            <div>Users</div>
            {pages.map(item => <span
                key={item}
                className={props.currentPage === item ? styles.selectedPage : undefined}
                onClick={() => { props.onPageChanged(item) }}>{item}</span>)}

            <div className={styles.usersContainer}>
                {props.users.map(user => <div key={user.id} className={styles.userContainer}>

                    <div>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img alt='' src={user.photos.small ? user.photos.small : UserAvatar} className={styles.userAvatar} />
                            </NavLink>
                        </div>
                        <div>
                            {

                                user.followed
                                    ? <button onClick={() => { props.unFollow(user.id) }} >Unfollow</button>
                                    : <button onClick={() => { props.follow(user.id) }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.leftSide}>
                            <div>{user.name}</div>
                            <div>user.status</div>
                        </div>
                        <div className={styles.rightSide}>
                            <div>user.location.country</div>
                            <div>user.location.city</div>
                        </div>
                    </div>
                </div>
                )
                }
            </div>
        </div>
    )

}; 