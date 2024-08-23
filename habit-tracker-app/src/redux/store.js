import { configureStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'; // Your combined reducers

const store = configureStore(
  rootReducer,
  composeWithDevTools(), // Enables Redux DevTools
  applyMiddleware(thunk) // Add middleware for async logic
);

export default store;
