// 定义状态
export default {
  // 命名空间  有点类似reducer的名字
  namespace: 'num',
  // 定义状态
  state: {
    number: 0
  },
  // 定义reducer   reducer里面只能处理同步的action
  reducers: {
    // 在这个reducer中  函数名其实就是action的type  提交的action.type减去命名空间如果跟
    // 这个函数名一样 那么就执行这个函数  更新state
    // 而这个action其实就是你提交的action的内容 可以用来传数据
    add(state, action) {
      // console.log(action);
      return {
        number: state.number + 1
      };
    },
  },
  // 定义effects  处理异步的action   这就和saga里面一样了   原理就是拿到异步结果之后在去拿到dispatch (也就是put)
  effects: {
    // sync就是去掉命名空间的action名字
    *sync(props, { call, put, select }) {
      // props  就是这个action信息  传递数据的
      // call 包裹异步动作
      // put 相当于dispatch
      // select  可以拿到总的store中的状态值
      const res= yield select((state)=>state)
      // console.log(res);
      // 两秒后返回成功promise
      yield call(() => new Promise(res => setTimeout(() => res(), 2000)))
      yield put({ type: 'add' });
    },
  },
  // 订阅  就是监听一些事件，然后处理一些事情
  subscriptions: {
    // setup
    setup({ dispatch, history }) {
      // history  可以跳转
      // dispatch  提交action
      // 监听浏览器窗口改变大小  触发action
      window.onresize=()=>{
        dispatch({type:'add'})
      }
    },
    setup1({ dispatch, history }) {
      // 监听浏览器地址栏
      history.listen((location)=>{
        // console.log(location);
        // 在这里可根据地址栏信息判断  然后做一些事情

      })
    },
  },
}


// 全部定义完了之后去入口文件注册一下
