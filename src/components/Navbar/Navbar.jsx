import navbar from './Navbar.module.css'
export const Navbar = () => {
    return (
        <nav className={navbar.nav}>
            <div className={`${navbar.item} ${navbar.active}`}><a>Profile</a></div>
            <div className={navbar.item}><a>Massages</a></div>
            <div className={navbar.item}><a>News</a></div>
            <div className={navbar.item}><a>Music</a></div>
            <div className={navbar.item}><a>Settings</a></div>
        </nav>
    )
}