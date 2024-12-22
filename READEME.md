> told u what's webpack is used for.

#### without webpack

```html
// index.html
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="container"></div>
  </body>
  <script src="./content.js"></script>
  <script src="./header.js"></script>
  <script src="./index.js"></script>
</html>
```

```js
// index.js
var root = document.getElementById("container");
new Content();
new Header();
```

```js
// content.js
function Content() {
  var content = document.createElement("div");
  content.innerText = "content";
  root.appendChild(content);
}
```

```js
//header.js
function Header() {
  var header = document.createElement("div");
  header.innerText = "header";
  root.appendChild(header);
}
```

In this case, run well, but if we want to add some other js file, we need to add it in the html file, and the order of the js file is important.

let use another way to write it.

first let have a new file 'siderbar.js'

```js
// sidebar.js
export default function Sidebar() {
  var root = document.getElementById("container");
  var sidebar = document.createElement("div");
  sidebar.innerText = "sidebar";
  root?.appendChild(sidebar);
}
```

then we need to modify the index.js file

```js
// index.js
import Sidebar from "./sidebar.js";
var root = document.getElementById("container");
new Content();
new Header();
new Sidebar();
```

run it , you will see `Uncaught SyntaxError: Cannont use import statement outside a module` in Console.

Because the browser does not support ES6 module, so we need to use some tool to manage it.

let's try with webpack. let's go!

---

#### with webpack

first let's use npm to install webpack and webpack-cli

```bash
npm install webpack webpack-cli -D
```

then create a new file webpack.config.js

```js
// webpack.config.js
const path = require("path");
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

and modify the index.html file

```html
// index.html
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="container"></div>
  </body>
  <script src="./dist/main.js"></script>
</html>
```

then we can use webpack to build our project.

```bash
npx webpack
```

then you will see a new file 'main.js' in the dist folder.
and you can see the result in the browser.

---

Above all is the basic usage of webpack.
of course webpack is much more powerful than that, you can use it to manage your project, like css, image, font, etc.
