import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Events from './components/Events';
import Videos from './components/Videos';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/events" component={Events} />
    <Route path="/videos" component={Videos} />
  </Router>
);

export default Routes;