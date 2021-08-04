import * as TYPES from ("../actions/types.js")

const initialState = {
    authUser: null,
    products: [],
    product:[],
    users: [],
    categories: [],
    office:[],
    orders:[],
    reviews:[],
    stock:[],
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
        case TYPES.CREATE_USER: return state

        case TYPES.GET_ALL_CATEGORY: return{
            ...state,
            categories:action.payload
        }
        case TYPES.CREATE_CATEGORY: return state

        case TYPES.GET_ALL_OFFICE: return{
            ...state,
            office:action.payload
        }
        case TYPES.CREATE_OFFICE: return state

        case TYPES.GET_ALL_ORDER: return{
            ...state,
            orders:action.payload
        }
        case TYPES.CREATE_ORDER: return state

        case TYPES.GET_ALL_REVIEW: return{
            ...state,
            reviews:action.payload
        }
        case TYPES.CREATE_REVIEW: return state

        case TYPES.GET_ALL_STOCK: return{
            ...state,
            stock:action.payload
        }
        case TYPES.STOCK: return state
        


        default: {return {...state}}
    }
}

export default rootReducer;