import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./habitReducer"; // Your combined reducers

const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;
export default store;
