import axios from 'axios'
import history from '../history'

const serverURL = 'http://localhost:8000'

export const adminLogin = formValues => async dispatch => {
    const onSuccess = res => {
        console.log(res)
        dispatch({
            type: 'ADMIN_AUTH',
        })
        localStorage.setItem('jwtToken', res.data.token)
        history.push('/admin/index')
    }

    const onError = error => {
        console.log(error)
        dispatch({
            type: 'AUTH_ERROR',
            payload: error
        })
    }

    try {
        const success = await axios.post(`${serverURL}/adminsignin`, { ...formValues })
        return onSuccess(success)
    } catch(error) {
        return onError(error)
    }
}

export const adminSignUp = formValues => async dispatch => {
    const res = await axios.post(`${serverURL}/adminsignup`, { ...formValues })

    dispatch({
        type: 'ADMIN_AUTH',
        payload: res.data
    })
    history.push('/admin/index')
}

export const createItem = formValues => async dispatch => {
    console.log(formValues)
    // const res = await axios.post(`${serverURL}/createItem`, { ...formValues })

    // dispatch({
    //     type: 'CREATE_ITEM',
    //     payload: res.data
    // })
    // history.push('/')
}

export const getItems = () => async dispatch => {
    const res = await axios.get(`${serverURL}/getitems`)

    dispatch({
        type: 'GET_ITEMS',
        payload: res.data
    })
}

export const getItem = _id => async dispatch => {
    const res = await axios.get(`${serverURL}/getitem/${_id}`)

    dispatch({
        type: 'GET_ITEM',
        payload: res.data
    })
}

export const editItem = (formValues, _id) => async dispatch => {
    const res = await axios.patch(`${serverURL}/edititem/${_id}`, { ...formValues })

    dispatch({
        type: 'EDIT_ITEM',
        payload: res.data
    })
    history.push('/')
}

export const deleteItem = _id => async dispatch => {
    const res = await axios.delete(`${serverURL}/deleteitem/${_id}`)

    dispatch({
        type: 'DELETE_ITEM',
        payload: res.data
    })
    history.push('/')
}