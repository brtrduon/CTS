export default (state = {}, action) => {
    switch(action.type) {
        case 'ADMIN_LOGIN':
            return {
                ...state,
                auth: true
            }

        case 'AUTH_ERROR':
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}