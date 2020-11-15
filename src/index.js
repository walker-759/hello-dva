// 导入dva
import dva from 'dva';
import './index.css';
// 导入创建BrowserHistory的函数
import { createBrowserHistory as createHistory } from 'history';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger';

const logger = store => next => action => {
  // console.log('dispatching', action);
  let result = next(action);
  // console.log('next state', store.getState());
  return result;
};

const error = store => next => action => {
  try {
    // console.log('error');
    next(action)
  } catch(e) {
    console.log('error ' + e);
  }
};

const extraReducers = {
  form(state = false, action) {
    switch (action.type) {
      case 'SHOW':
        return true;
      case 'HIDE':
        return false;
      default:
        return state
    }
  }
}

const onEffect = (effect, { put }, model, key) => {
  return function*(...args) {
    yield put({ type: 'SHOW' });
    yield effect(...args);
    yield put({ type: 'HIDE' });
  };
}

// 1. Initialize
const app = dva({
  // 让项目使用BrowserHistory路由方式
  history: createHistory(),
  onAction: [logger, error],
  extraReducers: extraReducers,
  onEffect: onEffect
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// 就是在这里注册使用一下状态
// 高级 其实就是简写   把model组成的数据拿过来遍历
// 然后依次执行app.model()
require('./models').default.forEach(key => app.model(key.default));
// console.log(require('./models'));

// 初级
// app.model(require('./models/num').default)

// 4. Router   引入路由
// 加上default就是拿到默认导出来得那个路由函数   也可以用import也行
app.router(require('./router').default);

// 5. Start   把整个跟react渲染到html上
app.start('#root');


// console.dir(app);
