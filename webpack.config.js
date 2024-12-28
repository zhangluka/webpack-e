const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CustomWebpackPlugin = require('./src/plugins/customPlugin');
module.exports = {
  // entry: './src/index.js',
  entry: {
    main: './src/index.js',
    // sub: './src/index.js'
    lodash: 'lodash'
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    // use public path
    // publicPath: 'www.cdn.com/xxx'
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'initial'
    }
  },
  devServer: {
    static: 'dist',
    port: 8888,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
    new CustomWebpackPlugin({
      user: 'bobby'
    })
  ],
  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name]_[hash].[ext]'
        }
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(sass|scss)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    }
    ]
  }
}