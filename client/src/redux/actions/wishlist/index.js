import axios from 'axios';
import * as TYPES from "../types"

export const getWishlist = (id) => {
    return async  (dispatch) => {
        const res = await axios.get('/wishlist/' + id)
        return dispatch({ type: TYPES.GET_ALL_WISHLIST, payload: res.data })
    }
}

export const deleteWishlist = (params) => {
    return async  (dispatch) => {
        console.log("params..")
        console.log(params)
        const res = await axios.delete(`/wishlist/${params.productId}/${params.userId}`)
        return dispatch({ type: TYPES.DELETE_WISHLIST, payload: res.data })
    }
}
export const createWishlist = (wishlist) => {
    return async  (dispatch) => {
        const res = await axios.post('/wishlist/', wishlist)
        return dispatch({ type: TYPES.CREATE_WISHLIST, payload: res.data })
    }
}