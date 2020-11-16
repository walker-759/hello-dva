// 路由部分
import React from 'react';
// 只是把react-router封装到dva-router中了
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
// import CounterPage from './routes/CounterPage';
// import UserPage from './routes/UserPage';
import Test from './routes/Test'
import Test2 from './routes/Test2'

// 需要返回一个路由配置函数，这样就可以使用路由了
function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={IndexPage} /> */}
        {/* <Route path="/counter" exact component={CounterPage} />
        <Route path="/user" exact component={UserPage} /> */}
        <Route path="/" exact component={Test}  />
        <Route path="/test2" component={Test2}  />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
