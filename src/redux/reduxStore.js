import {legacy_createStore as createStore, combineReducers} from "redux"; 
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import { usersReducer } from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
});

export let store = createStore(reducers);

window.store = store;

