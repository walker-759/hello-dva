import React from 'react'
// 引入connect方法从dva中
import { connect } from 'dva'
// props校验
import propTypes from 'prop-types'
// 导入使用redux-actions 的创建action方法
import {counterAsyncAdd} from '../actions/index'

// 导入让非路由组件拿到history的高阶组件  并且拿到常规路由导航的标签
import { withRouter,Link } from 'dva/router';
class Test1 extends React.Component {
  state = {
  }
  componentDidMount(){
    console.log(this.props);
  }
  add=()=>{
    // 这里面可以直接提交action  最好把命名空间加上  这样不会产生action.type的冲突
    this.props.dispatch({type:'num/add',data:123})
  }
  sync=()=>{

    this.props.dispatch({type:'num/sync',data:123})
  }
  //
  syncredux=()=>{
    // 这个异步的action  就用  redux-action库的写法
    this.props.dispatch(counterAsyncAdd())
  }
  //
  gototest2=()=>{
    this.props.history.push('/test2')
  }
  render() {
    return (
      <>
        <div>———————————————————</div>
        <div>test路由组件中的test1</div>
        <h1>{this.props.num.number}</h1>
        <button onClick={this.add}>点击加1</button>
        <button onClick={this.sync}>异步加1</button>
        <button onClick={this.syncredux}>异步加redux-action</button>
        <button onClick={this.gototest2}>测试路由跳转到test2组件</button>
        <Link to={'/test2'}>常规路由导航测试</Link>

        <div>———————————————————</div>
      </>
    )
  }
}
// 这就是props校验
Test1.propTypes={
  num:propTypes.object
}

// 和正常的项目一样 展示组件也是使用connect拿到总的store里面的状态
// 而在dva中 展示组件本身也是能达到dispatch的
// 如果非路由组件想要拿到history  就拿withRouter包裹一下
export default withRouter(connect((state) => ({ num: state.num }))(Test1))

