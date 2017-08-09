import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker';

import vd from './reducers'
import App from './components/App';


import './styles/general.css';
import './styles/index.css';
import './styles/style.css';

let store = createStore(vd)


render((

  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
