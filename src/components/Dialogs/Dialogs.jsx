import { NavLink } from 'react-router-dom'
import dialog from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={dialog.dialogs}>
            <div className={dialog.dialogItems}>
                <div className={dialog.dialog}>
                    <NavLink to='/dialogs/1'>Dimych</NavLink>
                </div>
                <div className={dialog.dialog}>
                    <NavLink to='/dialogs/2'>Andrey</NavLink>
                </div>
                <div className={dialog.dialog}>
                    <NavLink to='/dialogs/3'>Sasha</NavLink>
                </div>
                <div className={dialog.dialog}>
                    <NavLink to='/dialogs/4'>Valerya</NavLink>
                </div>
            </div>
            <div className={dialog.messages}>
                <div className={dialog.message}>
                    Hi
                </div>
                <div className={dialog.message}>
                    How is your it?
                </div>
                <div className={dialog.message}>
                    I'm fine
                </div>
            </div>
        </div>
    )
}