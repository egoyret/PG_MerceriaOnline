

const initialState = {
    authUser: null
  };

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOG_IN_USER': {
            return {...state, 
                    authUser: action.payload}
        }
        default: {return {...state}}
    }
}

export default rootReducer;