import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducer";

const createWithInitialState = initialState => {
    return createStore(appReducer, initialState, applyMiddleware(thunk));
}
export default createWithInitialState;
