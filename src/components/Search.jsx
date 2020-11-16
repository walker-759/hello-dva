import React from 'react'
import { withRouter } from 'dva/router'
import { connect } from 'dva'
class Search extends React.Component {
    state = {
    }
    componentDidMount() {
        console.log(this.props);
    }
    gotest = () => {
        this.props.history.push('/')
    }
    getuser = () => {
        this.props.dispatch({ type: 'search/usersync' })
    }
    render() {
        const { users, login, err } = this.props.users
        return (
            <>
                <h1>{users ? users : login ? 'login' : err ? '网络错误' : 'Search'}</h1>
                <button onClick={this.getuser}>请求用户名</button>
                <button onClick={this.gotest}>返回test</button>
            </>
        )
    }
}
export default withRouter(connect((state) => ({ users: state.search }))(Search)) 