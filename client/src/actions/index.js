import history from '../history'
import axios from 'axios'
// import serverURL from './serverURL'

const serverURL = 'http://localhost:3001'

export const createItem = formValues => async dispatch => {
    // const res = await serverURL.post('/items', { ...formValues })
    const res = await axios.post(`${serverURL}/createItem`)

    dispatch({
        type: 'CREATE_ITEM',
        payload: res.data
    })
    history.push('/')
}

export const getItems = () => async dispatch => {
    const res = await serverURL.get('/items')

    dispatch({
        type: 'GET_ITEMS',
        payload: res.data
    })
}

export const getItem = id => async dispatch => {
    const res = await serverURL.get(`items/${id}`)

    dispatch({
        type: 'GET_ITEM',
        payload: res.data
    })
}

export const editItem = (formValues, id) => async dispatch => {
    const res = await serverURL.patch(`items/${id}`, { ...formValues })

    dispatch({
        type: 'EDIT_ITEM',
        payload: res.data
    })
    history.push('/')
}

export const deleteItem = id => async dispatch => {
    await serverURL.delete(`items/${id}`)

    dispatch({
        type: 'DELETE_ITEM',
        payload: id
    })
    history.push('/')
}