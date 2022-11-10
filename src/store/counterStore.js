import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import overAllReducer from "../reducer/counterReducer";

const rootReducer = combineReducers({ overAllReducer })

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store