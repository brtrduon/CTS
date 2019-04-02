import _ from 'lodash'

export default (state = {}, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                [action.payload._id]: action.payload
            }

        case 'GET_CART_ITEM_COUNT':
            return {
                ...state,
                [action.payload._id]: action.payload
            }

        case 'REMOVE_ITEM_FROM_CART':
            return _.omit(
                    action.payload
                )
            

        default:
            return state
    }
}