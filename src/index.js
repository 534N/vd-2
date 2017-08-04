// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';

import './styles/index.css';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);