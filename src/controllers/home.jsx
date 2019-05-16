import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import App from '../components/App';

const home = async (req, res, next) => {
  try {
    let initialState = {
    
    };

    const store = configureStore(initialState);

    const reactBody = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const preloadedState = JSON.stringify(store.getState()).replace(
      /</g,
      '\\u003c'
    );

    const documentTitle = 'Code Snake';

    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.status(200).render('home', {
      layout: false,
      preloadedState,
      documentTitle,
      reactBody
    });
  } catch (err) {
    console.info('Error', err);
    return next(new Error('500'));
  }
};

export default home;
