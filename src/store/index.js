import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

export function configureStore(preloadedState = {}) {
  const middlewares = composeWithDevTools(applyMiddleware(thunk));

  return createStore(reducer, preloadedState, middlewares);
}
