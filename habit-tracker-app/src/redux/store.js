import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; // Your combined reducers

const store = createStore(
  rootReducer,
);

window.store = store;
export default store;