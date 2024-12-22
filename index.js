import Sidebar from './sidebar.js'
import avator from './assets/avator.jpg'
import './index.css'
import './styles.module.scss'
import CreateAvatar from './createAvatar.js'
// var root = document.getElementById("container");
// new Content();
// new Header();

CreateAvatar()

var root = document.getElementById("container");
var img = new Image();
img.src = avator;
img.classList.add("avator-sass");
root?.append(img)

new Sidebar();