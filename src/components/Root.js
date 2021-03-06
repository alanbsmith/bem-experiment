/* eslint react/jsx-max-props-per-line: 0 */
/* eslint react/jsx-sort-props: 0 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import App from './App';
import Bookmarks from './Bookmarks';
import Home from './Home';
import Sources from './Sources';
import Source from './Source';

function Root() {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sources/" component={Sources} />
          <Route path="/sources/:id" component={Source} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route path="*" component={Home} />
        </Switch>
      </App>
    </Router>
  );
};

export default Root;
