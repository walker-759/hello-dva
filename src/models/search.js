// import {getusersapi} from '../api/index'

export default {

    namespace: 'search',
  
    state: {
        users:'',
        login:false,
        err:false
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *usersync({ payload }, { call, put }) { 
        yield put({type:'login',data:true})
        try {
            const res= yield call(()=>new Promise(res=>setTimeout(()=>res({name:'www'}),2000)))
            // throw error
            yield put({type:'save',data:res.name})
            yield put({type:'login',data:false})
        } catch (error) {
            yield put({type:'err',data:true})
            yield put({type:'login',data:false})
        }
      },
    },
  
    reducers: {
      save(state, action) {
        return {...state, users:action.data };
      },
      login(state, action) {
        return {...state, login:action.data };
      },
      err(state, action) {
        return {...state, err:true };
      },
    },
  
  };
    