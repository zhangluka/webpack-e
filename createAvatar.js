import avatar from "./assets/avator.jpg";
export default function CreateAvatar() {
  var img = new Image();
  img.src = avatar;
  // img.classList.add('avator-sass')
  var root = document.getElementById('container');
  root?.appendChild(img)
}