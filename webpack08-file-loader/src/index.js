// import src from './images/active.png';
import './index.css';

const oImg = document.createElement('img');
let src = require('./images/active.png'); // 默认为Module对象
// console.log('src -1', src);
// src = require('./images/active.png').default; // http://127.0.0.1:5500/webpack08-file-loader/dist/6360d3312703bf74b296b5a0fe9668a1.png

console.log('src', src);
oImg.src = src;
document.body.appendChild(oImg);