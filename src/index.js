// src/index.js

import './style.css'
import counter from './counter';
import number from './number';
import { add } from './math'
import _ from 'lodash'


console.log(_.join(['bobby', 'webpack'], 'yeeee'));
add(1, 4)

number();
counter();

// 额外的模块HMR配置
if (module.hot) {
  window.cmodule = module
  module.hot.accept('./number.js', () => {
    document.body.removeChild(document.getElementById('number'));
    number();
  })
}


var root = document.getElementById('root');
var div = document.createElement('div')

div.innerHTML = `bobby with webpack ye`


var btn = document.createElement('button')
btn.innerHTML = 'click'
document.body.appendChild(btn)

btn.addEventListener('click', () => {
  var dom = document.createElement('div')
  dom.innerHTML = 'new item'
  document.body.appendChild(dom)
})

root?.appendChild(div)