export default (state = {}, action) => {
    switch(action.type) {
        case 'USER_AUTH':
            return {
                ...state,
                auth: true
            }

        default:
            return state
    }
}