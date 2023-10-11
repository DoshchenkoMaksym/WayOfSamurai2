import { follow, setCurrentPage, setUsers, unFollow, totalCount, isFetching } from "../../redux/usersReducer"
import { connect } from "react-redux";
import axios from 'axios';
import React from 'react';
import { Users } from './User';
import { Preloader } from "../common/preloader/Preloader";
class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.onFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.onFetching(false);
            this.props.setUsers(response.data.items);
            this.props.totalCount(response.data.totalCount);
        })
    };

    onPageChanged = (pageId) => {
        this.props.onFetching(true);
        this.props.setCurrentPage(pageId);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageId}&count=${this.props.pageSize}`).then(response => {
            this.props.onFetching(false);
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return (
            <>
                {  this.props.isFetching ? <Preloader /> : null}
                <Users
                    onPageChanged={this.onPageChanged}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    currentPage={this.props.currentPage} />
            </>
        )
    }


};

// let mapDispatchToProps = (dispatch) => {

//     return {
//         follow: (userId) => {

//             let action = followAC(userId);
//             dispatch(action);
//         },
//         unFollow: (userId) => {

//             let action = unFollowAC(userId);
//             dispatch(action);
//         },
//         setUsers: (users) => {
//             let action = setUsersAC(users);
//             dispatch(action);
//         },
//         totalCount: (totalCount) => {
//             let action = totalCountAC(totalCount);
//             dispatch(action);
//         },
//         setCurrentPage: (pageId) => {
//             let action = setCurrentPageAC(pageId);
//             dispatch(action)
//         },
//         onFetching: (isFetching) => {
//             let action = isFetchingAC(isFetching);
//             dispatch(action);
//         }

//     }
// };

let mapStateToProps = (state) => {
    
    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};

export let UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers, 
    totalCount,
    setCurrentPage,
    onFetching: isFetching
    }
)(UsersAPIContainer)