import * as TYPES from "../actions/types.js";

const initialState = {
    authUser: 'guest',
    products: [],
    product:[],
    users: [],
    user:[],
    categories: [],
    category:[],
    offices:[],
    office:[],
    orders:[],
    order:[],
    reviews:[],
    review:[],
    stocks:[],
    stock:[],
    bundles:[],
    bundle:[],
  };

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.LOG_IN_USER: {
            return {...state, 
                    authUser: action.payload}
        }
        case TYPES.GET_ALL_PRODUCT: return{
            ...state,
            products:action.payload   
        }
        case TYPES.GET_PRODUCT: return{
            ...state,
            product:action.payload   
        }
        case TYPES.CREATE_PRODUCT: return state
        case TYPES.UPDATE_PRODUCT: return state
        case TYPES.DELETE_PRODUCT: return state
        
        case TYPES.GET_ALL_USER: return{
            ...state,
            users:action.payload   
        }
        case TYPES.GET_USER: return{
            ...state,
            user:action.payload   
        }
        case TYPES.CREATE_USER: return state
        case TYPES.UPDATE_USER: return state
        case TYPES.DELETE_USER: return state
        
        case TYPES.GET_ALL_CATEGORY: return{
            ...state,
            categories:action.payload
        }
        case TYPES.GET_CATEGORY: return{
            ...state,
            category:action.payload
        }
        case TYPES.CREATE_CATEGORY: return state
        case TYPES.UPDATE_CATEGORY: return state
        case TYPES.DELETE_CATEGORY: return state

        case TYPES.GET_ALL_OFFICE: return{
            ...state,
            offices:action.payload
        }
        case TYPES.GET_OFFICE: return{
            ...state,
            office:action.payload
        }
        case TYPES.CREATE_OFFICE: return state
        case TYPES.UPDATE_OFFICE: return state
        case TYPES.DELETE_OFFICE: return state

        case TYPES.GET_ALL_ORDER: return{
            ...state,
            orders:action.payload
        }
        case TYPES.GET_ORDER: return{
            ...state,
            order:action.payload
        }
        case TYPES.CREATE_ORDER: return state
        case TYPES.UPDATE_ORDER: return state
        case TYPES.DELETE_ORDER: return state

        case TYPES.GET_ALL_REVIEW: return{
            ...state,
            reviews:action.payload
        }
        case TYPES.GET_REVIEW: return{
            ...state,
            review:action.payload
        }
        case TYPES.CREATE_REVIEW: return state
        case TYPES.UPDATE_REVIEW: return state
        case TYPES.DELETE_REVIEW: return state

        case TYPES.GET_ALL_STOCK: return{
            ...state,
            stocks:action.payload
        }
        case TYPES.GET_STOCK: return{
            ...state,
            stock:action.payload
        }
        case TYPES.CREATE_STOCK: return state
        case TYPES.UPDATE_STOCK: return state
        case TYPES.DELETE_STOCK: return state
        
        case TYPES.GET_ALL_BUNDLE: return{
            ...state,
            bundles:action.payload
        }
        case TYPES.GET_BUNDLE: return{
            ...state,
            bundle:action.payload
        }
        case TYPES.CREATE_BUNDLE: return state
        case TYPES.UPDATE_BUNDLE: return state
        case TYPES.DELETE_BUNDLE: return state
        

        default: {return {...state}}
    }
}

export default rootReducer;