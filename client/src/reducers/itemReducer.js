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

        default:
            return state
    }
}