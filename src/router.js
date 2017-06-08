import React from 'react';
import { Router, Route } from 'dva/router';
import CreateSchool from './routes/CreateSchool';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={CreateSchool} />
    </Router>
  );
}

export default RouterConfig;
