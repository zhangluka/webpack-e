// src/index.js
import '@babel/polyfill'

const arr = [
  new Promise(() => { }),
  new Promise(() => { }),
  new Promise(() => { }),
]
arr.map(item => {
  console.log(item);
})
import './style.css'

// 额外的模块HMR配置
if (module.hot) {
  window.cmodule = module
  // module.hot.accept('./number.js', () => {
  //   document.body.removeChild(document.getElementById('number'));
  //   number();
  // })
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