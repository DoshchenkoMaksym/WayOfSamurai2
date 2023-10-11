const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_COUNT = 'TOTAL_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

const initialState = {
    usersData:
        [
            // {
            //     id: 1,
            //     isFollow: true,
            //     userName: 'Dmitry K.',
            //     userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd88TsNcDCbucpdqOi0pwaPeCHQFScjWUIA&usqp=CAU',
            //     status: 'i am loking for a job right now...',
            //     location: { country: 'Belarus', city: 'Minsk' }
            // },
            // {
            //     id: 2,
            //     userName: 'Svetlana D.',
            //     isFollow: true,
            //     userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd88TsNcDCbucpdqOi0pwaPeCHQFScjWUIA&usqp=CAU',
            //     status: 'i am so pretty',
            //     location: { country: 'Belarus', city: 'Minsk' }
            // },
            // {
            //     id: 3,
            //     userName: 'Sergiy S.',
            //     isFollow: false,
            //     userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd88TsNcDCbucpdqOi0pwaPeCHQFScjWUIA&usqp=CAU',
            //     status: 'i like football!!!',
            //     location: { country: 'Ukraine', city: 'Kyiv' }
            // },
            // {
            //     id: 4,
            //     userName: 'Andrew T.',
            //     isFollow: false,
            //     userAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd88TsNcDCbucpdqOi0pwaPeCHQFScjWUIA&usqp=CAU',
            //     status: 'Want to help you crate a Video Production',
            //     location: { country: 'USA', city: 'Texac' }
            // },

        ],
    pageSize: 4,
    totalUsersCount: null,
    currentPage: 2,
    isFetching: false
};

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                usersData: state.usersData.map( user => {

                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }
        case UNFOLLOW:

            return {
                ...state,
                usersData: state.usersData.map(user => {

                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    };

                    return user;
                })
            }
        case SET_USERS: {

            return {
                ...state,
                usersData: action.users,
            };

        }
        case TOTAL_COUNT: {

            return {
                ...state,
                totalUsersCount: action.totalCount,
            };

        }
        case SET_CURRENT_PAGE: {

            return {
                ...state,
                currentPage: action.pageId,
            };

        }
        case TOGGLE_FETCHING: {

            return {
                ...state,
                isFetching: action.state,
            };

        }
        default:
            return state;
    }

};
export const setUsers = (users) => ({ type: SET_USERS, users });

export const follow = (userId) => ({ type: FOLLOW, userId });

export const unFollow = (userId) => ({ type: UNFOLLOW, userId });

export const setCurrentPage = (pageId) => ({ type: SET_CURRENT_PAGE, pageId });

export const totalCount = (totalCount) => ({ type: TOTAL_COUNT, totalCount });

export const isFetching = (state) => ({ type: TOGGLE_FETCHING, state });


