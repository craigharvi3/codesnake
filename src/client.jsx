import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './components/App';
import './assets/app.scss';

const app = () => {
  // Grab the state from a global variable injected into the server-generated HTML
  const preloadedState = window.RADIOPLAYER_PRELOADED_STATE;

  // Allow the passed state to be garbage-collected
  delete window.RADIOPLAYER_PRELOADED_STATE;

  // Create Redux store with initial state
  const store = configureStore(preloadedState);

  return hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('react-body')
  );
};

export default app;
