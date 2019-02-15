export default (state = {}, action) => {
    switch(action.type) {
        case 'CREATE_ITEM':
            return [
                action.payload
            ]

        case 'GET_ITEMS':
            return [
                action.payload
            ]

        default:
            return state
    }
}