import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import routers from './router';
import './styles/index.less';

ReactDOM.render(
  <Router>
    <Switch>
      {routers.map(router => (
        <Route
          key={router.key}
          path={router.path}
          component={router.component}
        />
      ))}
    </Switch>
  </Router>,
  document.getElementById('root'),
);
