import React from 'react'
class Test2 extends React.Component {
  state = {
  }
  gotest=()=>{
    this.props.history.push('/')
  }
  render() {
    return (
      <>
        <h1>这是test2</h1>
        <button onClick={this.gotest}>返回test</button>
      </>
    )
  }
}
export default Test2
