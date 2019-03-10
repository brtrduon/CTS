const initialState = {
    auth: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADMIN_LOGIN':
            return {
                ...state,
                auth: true
            }

        case 'ADMIN_LOGOUT':
            return {
                ...state,
                auth: false
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