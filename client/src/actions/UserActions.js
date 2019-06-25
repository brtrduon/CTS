import axios from 'axios'
import history from '../history'

const serverURL = 'http://54.183.65.117:8003'

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
    localStorage.setItem('_id', res.data._id)
    history.push('/')
}

export const userSignOut = () => async dispatch => {
    localStorage.setItem('userState', false)
    await dispatch({
        type: 'USER_LOGOUT',
        payload: console.log('You have logged out')
    })
    localStorage.removeItem('_id')
    history.push('/')
}

export const getItem = _id => async dispatch => {
    const res = await axios.get(`${serverURL}/getitem/${_id}`)

    dispatch({
        type: 'GET_ITEM',
        payload: res.data
    })
}

export const addToCart = (_id, user) => async dispatch => {
    const res = await axios.post(`${serverURL}/addtocart/${_id}`, { user })

    dispatch({
        type: 'ADD_TO_CART',
        payload: res.data
    })
    history.push('/items')
}

export const getCartItemCount = user => async dispatch => {
    const res = await axios.get(`${serverURL}/getcartitemcount/${user}`)

    dispatch({
        type: 'GET_CART_ITEM_COUNT',
        payload: res.data
    })
}
export const removeItemFromCart = (_id, user) => async dispatch => {
    const res = await axios.patch(`${serverURL}/removeitemfromcart/${_id}`, { user })

    dispatch({
        type: 'REMOVE_ITEM_FROM_CART',
        payload: res.data
    })
    history.push('/cart')
}