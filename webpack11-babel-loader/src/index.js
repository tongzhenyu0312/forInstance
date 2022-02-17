// import "@babel/polyfill";
// import "core-js/stable";
// import "regenerator-runtime/runtime"
import { fn, p } from './utils.js';
fn();
p.then(() => {
  console.log('promise.then is called');
})