import history from '../history'
import serverURL from './serverURL'

export const createItem = formValues => async (dispatch) => {
    const res = await serverURL.post('/items', { ...formValues })

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