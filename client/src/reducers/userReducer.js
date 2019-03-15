const initialState = {
    auth: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                auth: true
            }

        case 'USER_LOGOUT':
            return {
                ...state,
                auth: false
            }

        default:
            return state
    }
}