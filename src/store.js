import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [
  thunk,
  reduxPackMiddleware,
];

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
  serialize: { options: { symbol: true } },
});

const initialState = {};

export default createStore(rootReducer, initialState, composeEnhancers(
  applyMiddleware(...middleware),
));
