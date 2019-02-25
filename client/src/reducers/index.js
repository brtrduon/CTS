import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import itemReducer from './itemReducer'
import adminReducer from './adminReducer'

export default combineReducers({
    form: formReducer,
    item: itemReducer,
    admin: adminReducer
})