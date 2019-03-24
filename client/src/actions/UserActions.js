import axios from 'axios'
import history from '../history'

const serverURL = 'http://localhost:8000'

export const userSignUp = formValues => async dispatch => {
    const res = await axios.post(`${serverURL}/signup`, { ...formValues })
    localStorage.setItem('userState', true)

    dispatch({
        type: 'USER_LOGIN',
        payload: res.data
    })
    history.push('/')
}

export const userSignIn = formValues => async dispatch => {
    const res = await axios.post(`${serverURL}/signin`, { ...formValues })
    localStorage.setItem('userState', true)

    dispatch({
        type: 'USER_LOGIN',
        payload: res.data
    })
    history.push('/')
}

export const userSignOut = () => async dispatch => {
    localStorage.setItem('userState', false)
    await dispatch({
        type: 'USER_LOGOUT'
    })
    history.push('/')
}