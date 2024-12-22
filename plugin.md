after we understand the `loaders`, now we will learn about the `plugins`.

the plugins in webpack are used to extend the functionality of webpack.

they can be used to bundle different types of files, optimize the output

and can alse do something in lifecycle events of webpack.

now let't try it, let's go

#### html-webpack-plugin

this plugin will generate an html file for us, and inject the bundled js file into it.

first we need to install it

```
npm install --save-dev html-webpack-plugin
```

then use it in `webpack.config.js` file

```
const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
```

run webpack again, and you will see a new file `dist/index.html` generated.

#### clean-webpack-plugin

this plugin will clean the `dist` folder before each build.

first we need to install it

```
npm install --save-dev clean-webpack-plugin
```

then use it in `webpack.config.js` file

```
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
plugins: [
    new CleanWebpackPlugin()
  ]
```

run webpack again, and you will see the `dist` folder is cleaned.
