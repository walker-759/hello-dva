import React from 'react'
import Test1 from '../components/Test1'

class Test extends React.Component {
  state = {
  }
  componentDidMount(){
    // 这个组件是路由组件  能拿到history信息   但是子组件可能拿不到history  所以可以在这块
    // 给他传递过去  或者子组件使用路由高阶组件也行
    // console.log(this.props);
  }
  render() {
    return (
      <>
        <h1>这是test路由组件</h1>
        <Test1 />
      </>
    )
  }
}
export default Test
