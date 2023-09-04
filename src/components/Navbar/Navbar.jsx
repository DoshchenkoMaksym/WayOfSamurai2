import { NavLink } from 'react-router-dom'
import navbar from './Navbar.module.css'
import { Friends } from './Friends/Friends'

export const Navbar = (props) => {
    return (
        <nav className={navbar.nav}>
            <div className={navbar.item}>
                <NavLink to='/profile' className={({ isActive }) =>
                    isActive ? `${navbar.active}` : `${navbar.item}`
                }>
                    Profile
                </NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to='/dialogs' className={({ isActive }) =>
                    isActive ? `${navbar.active}` : `${navbar.item}`
                }>
                    Messages
                </NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to='/news' className={({ isActive }) =>
                    isActive ? `${navbar.active}` : `${navbar.item}`
                }>
                    News
                </NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to='/music' className={({ isActive }) =>
                    isActive ? `${navbar.active}` : `${navbar.item}`
                }>
                    Music
                </NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to='/settings' className={({ isActive, isPending }) =>
                    isActive ? `${navbar.active}` : `${navbar.item}`
                }>
                    Settings
                </NavLink>
            </div>
            <Friends state={props.store.getState()}/>
        </nav>
    )
}