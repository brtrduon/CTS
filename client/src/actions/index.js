import history from '../history'
import axios from 'axios'

const serverURL = 'http://localhost:8000'

export const createItem = formValues => async dispatch => {
    // const res = await serverURL.post('/items', { ...formValues })
    const res = await axios.post(`${serverURL}/createItem`, { ...formValues })

    dispatch({
        type: 'CREATE_ITEM',
        payload: res.data
    })
    history.push('/')
}

export const getItems = () => async dispatch => {
    const res = await axios.get(`${serverURL}/getitems`)

    dispatch({
        type: 'GET_ITEMS',
        payload: res.data
    })
}

export const getItem = id => async dispatch => {
    const res = await axios.get(`${serverURL}/getitem/${id}`)

    dispatch({
        type: 'GET_ITEM',
        payload: res.data
    })
}

export const editItem = (formValues, id) => async dispatch => {
    const res = await axios.patch(`${serverURL}/edititem/${id}`, { ...formValues })

    dispatch({
        type: 'EDIT_ITEM',
        payload: res.data
    })
    history.push('/')
}

export const deleteItem = id => async dispatch => {
    await axios.delete(`${serverURL}/items/${id}`)

    dispatch({
        type: 'DELETE_ITEM',
        payload: id
    })
    history.push('/')
}