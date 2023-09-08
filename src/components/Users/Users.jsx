import styles from './users.module.css'

export const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                isFollow: true,
                userName: 'Dmitry K.',
                userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd88TsNcDCbucpdqOi0pwaPeCHQFScjWUIA&usqp=CAU',
                status: 'i am loking for a job right now...',
                location: { country: 'Belarus', city: 'Minsk' }
            },
            {
                id: 2,
                userName: 'Svetlana D.',
                isFollow: true,
                userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd88TsNcDCbucpdqOi0pwaPeCHQFScjWUIA&usqp=CAU',
                status: 'i am so pretty',
                location: { country: 'Belarus', city: 'Minsk' }
            },
            {
                id: 3,
                userName: 'Sergiy S.',
                isFollow: false,
                userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd88TsNcDCbucpdqOi0pwaPeCHQFScjWUIA&usqp=CAU',
                status: 'i like football!!!',
                location: { country: 'Ukraine', city: 'Kyiv' }
            },
            {
                id: 4,
                userName: 'Andrew T.',
                isFollow: false,
                userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd88TsNcDCbucpdqOi0pwaPeCHQFScjWUIA&usqp=CAU',
                status: 'Want to help you crate a Video Production',
                location: { country: 'USA', city: 'Texac' }
            },
        ])
    }

    return (
        <div className={styles.container}>
            <div>Users</div>
            <div className={styles.usersContainer}>
                {props.users.map(user => <div key={user.id} className={styles.userContainer}>

                    <div>
                        <div>
                            <img alt='' src={user.userAvatar} className={styles.userAvatar} />
                        </div>
                        <div>
                            {
                                user.isFollow
                                    ? <button onClick={() => { props.unFollow(user.id) }} >Unfollow</button>
                                    : <button onClick={() => { props.follow(user.id) }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={styles.userInfo}>
                        <div className={styles.leftSide}>
                            <div>{user.userName}</div>
                            <div>{user.status}</div>
                        </div>
                        <div className={styles.rightSide}>
                            <div>{user.location.country},</div>
                            <div>{user.location.city}</div>
                        </div>
                    </div>
                </div>
                )
                }
            </div>
        </div>
    )
}