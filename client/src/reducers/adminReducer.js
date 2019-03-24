const initialState = {
    auth: localStorage.adminState
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADMIN_LOGIN':
            return {
                ...state,
                auth: localStorage.adminState
            }

        case 'ADMIN_LOGOUT':
            return {
                ...state,
                auth: localStorage.adminState
            }

        // if invalid login info is given
        case 'AUTH_ERROR':
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}