// 引入createAction  就是创建actions
import { createAction } from 'redux-actions';

// export const counterAdd = createAction('counter/add');
// 创建一个action并暴露
export const counterAsyncAdd = createAction('num/sync');
