import axios from 'axios'
import history from '../history'

const serverURL = 'http://localhost:8000'

export const userSignUp = formValues => async dispatch => {
    const res = await axios.post(`${serverURL}/signup`, { ...formValues })

    dispatch({
        type: 'USER_LOGIN',
        payload: res.data
    })
    history.push('/')
}

export const userSignIn = formValues => async dispatch => {
    const res = await axios.post(`${serverURL}/signin`, { ...formValues })

    dispatch({
        type: 'USER_LOGIN',
        payload: res.data
    })
    history.push('/')
}

export const userSignOut = () => async dispatch => {
    await dispatch({
        type: 'USER_LOGOUT'
    })
    history.push('/')
}