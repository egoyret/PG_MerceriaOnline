import {GET_ALL_PRODUCT,GET_ALL_USERS,GET_ALL_CATEGORIES} from "./action"
 
const inicialState = {
    products: [],
    product:[],
    users: [],
    categories: [],
    office:[],
    orders:[],
    reviews:[],
    stock:[],
}

export default function reducer (state = inicialState,action) {
    switch(action.type){
        case GET_ALL_PRODUCT: return{
            ...state,
            products:action.payload   
        }
        case POST_PRODUCT: return state

        case GET_ALL_USER: return{
            ...state,
            users:action.payload   
        }
        case POST_USER: return state
        case GET_ALL_CATEGORY: return{
            ...state,
            categories:action.payload
        }
        case POST_CATEGORY: return state
        case GET_ALL_OFFICE: return{
            ...state,
            office:action.payload
        }
        case POST_OFFICE: return state
        case GET_ALL_ORDER: return{
            ...state,
            orders:action.payload
        }
        case POST_ORDER: return state
        case GET_ALL_REVIEW: return{
            ...state,
            reviews:action.payload
        }
        case POST_REVIEW: return state
        case GET_ALL_STOCK: return{
            ...state,
            stock:action.payload
        }
        case POST_STOCK: return state
        
        default : return state
    }
}