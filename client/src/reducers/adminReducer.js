export default (state = {}, action) => {
    switch(action.type) {
        case 'ADMIN_AUTH':
            return {
                ...state,
                auth: true
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