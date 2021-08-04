import axios from 'axios';
import * as TYPES from "../types"

export function createProduct(product){
    return axios.post('http://localhost:3001/product', product)
    .then((response) => {
        return function (dispatch) {
            return dispatch({type: TYPES.CREATE_PRODUCT, payload: response})
        }
    })
}

export function getProduct(id){
    return axios.get('http://localhost:3001/product/' + id)
    .then((response) => {
        return function (dispatch) {
            return dispatch({type: TYPES.GET_PRODUCT, payload: response})
        }
    })
}

export function getAllProduct(){
    return axios.get('http://localhost:3001/product')
    .then((response) => {
        return function (dispatch) {
            return dispatch({type: TYPES.GET_ALL_PRODUCT, payload: response})
        }
    })
}

export function updateProduct(params){
    return axios.put('http://localhost:3001/product/', params)
    .then((response) => {
        return function (dispatch) {
            return dispatch({type: TYPES.GET_PRODUCT, payload: response})
        }
    })
}