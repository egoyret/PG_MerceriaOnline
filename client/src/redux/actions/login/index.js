import axios from 'axios';
import * as TYPES from "./types"

export function LogInUser (userCredentials) {
    return function (dispatch) {
        return dispatch({type: TYPES.LOG_IN_USER, payload: userCredentials})
    }
}