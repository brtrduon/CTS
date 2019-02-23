import _ from 'lodash'

export default (state = {}, action) => {
    switch(action.type) {
        case 'CREATE_ITEM':
            return [
                action.payload
            ]

        case 'GET_ITEMS':
            return {
                ..._.mapKeys(
                    action.payload,
                    '_id'
                )
            }

        case 'GET_ITEM':
            return {
                ...state,
                [action.payload._id]: action.payload
            }

        case 'EDIT_ITEM':
            return {
                [action.payload._id]: action.payload
            }

        case 'DELETE_ITEM':
            return _.omit(
                action.payload
            )

        default:
            return state
    }
}