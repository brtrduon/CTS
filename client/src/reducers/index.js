import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import itemReducer from './itemReducer'

export default combineReducers({
    form: formReducer,
    item: itemReducer
})