import axios from 'axios';
  
// export function createProduct (userData) {
//      return function(dispatch) {
//          return axios.post(`http://localhost:3001/Product`, userData)
//                         .then( (response) => {
//                             dispatch({ type: "CREATE_USER", payload: response.data });
//                         });
//                 }                   
// }

export function LogInUser (userCredentials) {
    return function (dispatch) {
        return dispatch({type:"LOG_IN_USER", payload: userCredentials})
    }
}