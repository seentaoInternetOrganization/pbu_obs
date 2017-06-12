import React from 'react';
import { Router, Route } from 'dva/router';
import CreateSchool from './routes/CreateSchool';
import SchoolManage from './routes/SchoolManage';
import UserManage from './routes/UserManage';


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
          name: 'SchoolManage',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/schoolList'));
              cb(null, require('./routes/SchoolManage'))
            })
          }
        },{
          path: 'CreateSchool',
          name: 'CreateSchool',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/CreateSchool'))
            })
          }
        },{
          path: 'UserManage',
          name: 'UserManage',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/UserManage'))
            })
          }
        },{
          path: 'CreateUser',
          name: 'CreateUser',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/CreateUser'))
            })
          }
        },
  ];
  return <Router history={history} routes={routes} />;
}
export default RouterConfig;
