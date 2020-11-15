// 就是把当前目录的js文件的默认暴露对象都拿过来  然后把他们加工成一个数组  然后默认暴露出去
// 这个数据里面存这一个一个的models对象
const context = require.context('./', false, /\.js$/);
export default context
  .keys()
  .filter(item => item !== './index.js')
  .map(key => context(key));
