import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import App from './Containers';

import store from './Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
