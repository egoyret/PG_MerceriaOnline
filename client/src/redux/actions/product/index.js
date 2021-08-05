import axios from 'axios';
import * as TYPES from "../types"


export const createProduct = (product) => {
    return async = (dispatch) => {
        const json = await axios.post('http://localhost:3001/product', product)
        return dispatch({ type: TYPES.CREATE_PRODUCT, payload: json.data })
    }
}

export const getProduct = (id) => {
    return async = (dispatch) => {
        const json = await axios.post('http://localhost:3001/product/' + id)
        return dispatch({ type: TYPES.GET_PRODUCT, payload: json.data })
    }
}


export const getAllProduct = () => {
    return async = (dispatch) => {
        const json = await axios.post('http://localhost:3001/product')
        return dispatch({ type: TYPES.GET_ALL_PRODUCT, payload: json.data })
    }
}


export const updateProduct = (params) => {
    return async = (dispatch) => {
        const json = await axios.post('http://localhost:3001/product/', params)
        return dispatch({ type: TYPES.UPDATE_PRODUCT, payload: json.data })
    }
}


export const deleteProduct = (params) => {
    return async = (dispatch) => {
        const json = await axios.delete('http://localhost:3001/product', params)
        return dispatch({ type: TYPES.DELETE_PRODUCT, payload: json.data })
    }
}

