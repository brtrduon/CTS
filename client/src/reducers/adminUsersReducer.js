import _ from 'lodash'

export default (state = {}, action) => {
    switch(action.type) {
        case 'GET_USERS':
            return {
                ..._.mapKeys(
                    action.payload,
                    '_id'
                )
            }

        default: 
            return state
    }
}