import {legacy_createStore as createStore, combineReducers} from "redux"; 
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sideBar: sideBarReducer
});

export let store = createStore(reducers);

window.store = store;

