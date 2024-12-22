export default function sidebar() {
  var root = document.getElementById("container")
  var sidebar = document.createElement("div")
  sidebar.innerText = 'sidebar'
  root?.appendChild(sidebar)
}