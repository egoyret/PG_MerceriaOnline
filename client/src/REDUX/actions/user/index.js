import axios from 'axios';
import * as TYPES from "../types"

export function createUser(user){
    return axios.post('http://localhost:3001/product', user)
    .then((response) => {
        return function (dispatch) {
            return dispatch({type: TYPES.CREATE_USER, payload: response})
        }
    })
}

export function updateUser(params){
    return axios.put('http://localhost:3001/product', params)
    .then((response) => {
        return function (dispatch) {
            return dispatch({type: TYPES.UPDATE_USER, payload: response})
        }
    })
}

export function getUser(id){
    return axios.get('http://localhost:3001/product/' + id)
    .then((response) => {
        return function (dispatch) {
            return dispatch({type: TYPES.GET_USER, payload: response})
        }
    })
}

export function getAllUser(){
    return axios.get('http://localhost:3001/product')
    .then((response) => {
        return function (dispatch) {
            return dispatch({type: TYPES.GET_ALL_USER, payload: response})
        }
    })
}