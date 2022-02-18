import { fn } from './utils.js';
console.log('log from index')
fn();

if (module.hot) {
  module.hot.accept(['./utils.js'], () => {
    console.log('./utils内容更新')
  })
}