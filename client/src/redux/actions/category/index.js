import axios from 'axios';
import * as TYPES from "../types"


export const getAllCategory = () => {
    return async = (dispatch) => {
        let json = await axios.get('http://localhost:3001/category')
        return dispatch({ type: TYPES.GET_ALL_CATEGORY, payload: json.data })
    }
}

export const getCategory = (id) => {
    return async = (dispatch) => {
        let json = await axios.get('http://localhost:3001/category/' + id)
        return dispatch({ type: TYPES.GET_CATEGORY, payload: json.data })
    }
}

export const postCategory = (category) => {
    return async = (dispatch) => {
        let json = await axios.post('http://localhost:3001/category', category)
        return dispatch({ type: TYPES.CREATE_CATEGORY, payload: json.data })
    }
}

export const deleteCategory = (params) => {
    return async = (dispatch) => {
        let json = await axios.delete('http://localhost:3001/category', params)
        return dispatch({ type: TYPES.DELETE_CATEGORY, payload: json.data })
    }
}

export const updateCategory = (id) => {
    return async = (dispatch) => {
        let json = await axios.put('http://localhost:3001/category', id)
        return dispatch({ type: TYPES.UPDATE_CATEGORY, payload: json.data })
    }
}
