import { NavLink } from "react-router-dom";
import  dialog from './DialogsItems.module.css'

export const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={dialog.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}