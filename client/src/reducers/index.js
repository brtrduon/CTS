import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import itemReducer from './itemReducer'
import adminReducer from './adminReducer'
import userReducer from './userReducer'
import adminUsersReducer from './adminUsersReducer'

export default combineReducers({
    form: formReducer,
    item: itemReducer,
    admin: adminReducer,
    user: userReducer,
    adminUsersCtrl: adminUsersReducer
})