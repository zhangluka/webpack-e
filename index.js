import Sidebar from './sidebar.js'
import avator from './assets/avator.jpg'
import './index.css'
import cStyle from './styles.module.scss'
import CreateAvatar from './createAvatar.js'
// var root = document.getElementById("container");
// new Content();
// new Header();

CreateAvatar()

var root = document.getElementById("container");
var img = new Image();
img.src = avator;
console.log(cStyle);
img.classList.add(cStyle["avator-sass"]);
root?.append(img)

new Sidebar();