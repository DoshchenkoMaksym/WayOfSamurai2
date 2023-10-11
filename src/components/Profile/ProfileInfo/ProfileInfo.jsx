import { Preloader } from '../../common/preloader/Preloader'
import profileInfo from './ProfileInfo.module.css'


export const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    let contactsValues = Object.keys(props.profile.contacts);

    return (
        <>
            <div>
                <img alt="" className={profileInfo.img} src="https://klike.net/uploads/posts/2022-09/1662533191_g-1.jpg" />
            </div>
            <div>
                <img alt="" className={profileInfo.avatar} src={props.profile.photos.large} />
                <div>{props.profile.fullName}</div>
                <div>About me: {props.profile.aboutMe}</div>
                <div>
                    Contacts:
                    <ul>
                        {contactsValues.map(item => {
                            return props.profile.contacts[item] !== null
                                ?
                                <li>{item}:
                                    <a className={profileInfo.profileLink} href={props.profile.contacts[item]}>
                                        {props.profile.contacts[item]}
                                    </a>
                                </li>
                                :
                                null
                        }
                        )}
                    </ul>
                    <div>
                        {props.profile.lookingForAJob
                            ? <div>
                                <div>
                                    Рабочий статус: Open to work
                                </div>
                                <div>
                                    Описание: {props.profile.lookingForAJobDescription}
                                </div>
                            </div>
                            :
                            <div>
                                Рабочий статус: Involved
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}