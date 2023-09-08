import { followAC, setUsersAC, unFollowAC } from "../../redux/usersReducer"
import { Users } from "./Users";
import { connect } from "react-redux";

let mapDispatchToProps = (dispatch) => {
    
    return {
        follow: (userId) => {
            
            let action = followAC(userId);
            dispatch(action);
        },
        unFollow: (userId) => {
            
            let action = unFollowAC(userId);
            dispatch(action);
        },
        setUsers: (users) => {
            let action = setUsersAC(users);
            dispatch(action);
        }
    }
};

let mapStateToProps = (state) => {
    
    return {
        users: state.usersPage.usersData,
    }
};

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)