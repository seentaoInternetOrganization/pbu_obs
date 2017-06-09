import React from 'react';
import { Router, Route } from 'dva/router';
import CreateSchool from './routes/CreateSchool';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/schoolList'));
          cb(null, require('./routes/CreateSchool'));
        });
      },
    },
  ];
  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
