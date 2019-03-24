const initialState = {
    auth: localStorage.userState
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                auth: localStorage.userState
            }

        case 'USER_LOGOUT':
            return {
                ...state,
                auth: localStorage.userState
            }

        default:
            return state
    }
}