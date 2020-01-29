import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'context';
import App from 'components/App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);
