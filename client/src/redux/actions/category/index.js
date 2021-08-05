import axios from 'axios';
import * as TYPES from "../types"


export const getAllCategory = () => {
<<<<<<< HEAD
    return async  (dispatch) => {
        let res = await axios.get('http://localhost:3001/category')
        return dispatch({ type: TYPES.GET_ALL_CATEGORY, payload: res.data })
=======
    return async (dispatch) => {
        let json = await axios.get('http://localhost:3001/category')
        return dispatch({ type: TYPES.GET_ALL_CATEGORY, payload: json.data })
>>>>>>> c87b7846f8b2cbd3f4558bf4e72b5ead4bfedc66
    }
}

export const getCategory = (id) => {
<<<<<<< HEAD
    return async  (dispatch) => {
        let res = await axios.get('http://localhost:3001/category/' + id)
        return dispatch({ type: TYPES.GET_CATEGORY, payload: res.data })
    }
}

export const postCategory = (name) => {
    return async  (dispatch) => {
        let res = await axios.post('http://localhost:3001/category?name='+ name)
        return dispatch({ type: TYPES.CREATE_CATEGORY, payload: res.data })
    }
}

export const deleteCategory = (id) => {
    return async  (dispatch) => {
        let res = await axios.delete('http://localhost:3001/category/' + id)
        return dispatch({ type: TYPES.DELETE_CATEGORY })
=======
    return async (dispatch) => {
        let json = await axios.get('http://localhost:3001/category/' + id)
        return dispatch({ type: TYPES.GET_CATEGORY, payload: json.data })
    }
}

export const postCategory = (category) => {
    return async (dispatch) => {
        let json = await axios.post('http://localhost:3001/category', category)
        return dispatch({ type: TYPES.CREATE_CATEGORY, payload: json.data })
    }
}

export const deleteCategory = (params) => {
    return async (dispatch) => {
        let json = await axios.delete('http://localhost:3001/category', params)
        return dispatch({ type: TYPES.DELETE_CATEGORY, payload: json.data })
>>>>>>> c87b7846f8b2cbd3f4558bf4e72b5ead4bfedc66
    }
}

export const updateCategory = (id) => {
<<<<<<< HEAD
    return async  (dispatch) => {
        let res = await axios.put('http://localhost:3001/category', id)
        return dispatch({ type: TYPES.UPDATE_CATEGORY, payload: res.data })
=======
    return async (dispatch) => {
        let json = await axios.put('http://localhost:3001/category', id)
        return dispatch({ type: TYPES.UPDATE_CATEGORY, payload: json.data })
>>>>>>> c87b7846f8b2cbd3f4558bf4e72b5ead4bfedc66
    }
}
