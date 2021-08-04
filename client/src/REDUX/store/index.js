import { createStore, applyMiddleware} from "redux";
import rootReducer from "../reducer/index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const ConfigureStore = () => {
//     var intialState = {};
//     try {
//     intialState = sessionStorage.getItem("master_class") ? JSON.parse(sessionStorage.getItem("master_class")) : {};
//     } catch (error) {
//     console.log('getError', error)
//     }
//     const saver = (store) => next => action => {
//     let stateToSave = store.getState();
//     sessionStorage.setItem("master_class", JSON.stringify({ ...stateToSave }))
//     return next(action);
//     }

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    );

    
export default store