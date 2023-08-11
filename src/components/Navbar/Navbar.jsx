import { NavLink } from 'react-router-dom'
import navbar from './Navbar.module.css'

export const Navbar = () => {
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
                    Massages
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
        </nav>
    )
}