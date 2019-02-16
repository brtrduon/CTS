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
                    'id'
                )
            }

        case 'GET_ITEM':
            return {
                ...state,
                [action.payload.id]: action.payload
            }

        case 'EDIT_ITEM':
            return {
                ...state,
                [action.payload.id]: action.payload
            }

        default:
            return state
    }
}