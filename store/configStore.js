import thunk from "./middleware/thunk.js";
import localStorage from "./middleware/localStorage.js";
import token from "./token.js";
const { createStore, combineReducers, compose, applyMiddleware } = Redux;

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunk, localStorage));
const reducer = combineReducers({ token });
const store = createStore(reducer, enhancers);

export default store;
