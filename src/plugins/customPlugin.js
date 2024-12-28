class CustomWebpackPlugin {
  constructor(options) {
    console.log(JSON.stringify(options, null, 2));
    this.options = options;
    console.log('CustomWebpackPlugin, Oops!')
  }
  // 插件调用时，默认执行函数
  // compiler: webpack实例
  apply(compiler) {
    compiler.hooks.emit.tapAsync('CustomWebpackPlugin', (compilation, callback) => {
      const contentTxt = 'This is custom plugin content, by: ' + this.options.user
      // compilation: 代表此次打包的编译结果
      // compilation.assets: 代表此次打包生成的所有资源
      compilation.assets['custom.txt'] = {
        source: () => contentTxt,
        size: () => contentTxt.length
      }
      callback()
    })
  }
}

module.exports = CustomWebpackPlugin