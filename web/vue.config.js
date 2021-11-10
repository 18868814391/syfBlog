const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  outputDir: process.env.outputDir,
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        modifyVars: {
          // 直接覆盖变量
          'blue': '#3ebfc7',
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true;  @import "${resolve('src/assets/styles/variables.less')}";`
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '_com': resolve('src/components'),
        '_api': resolve('src/api'),
        '_views': resolve('src/views')
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => {
          config.devtool('cheap-source-map')
          config.optimization.minimize(false)
        }
      )

    config
      .when(process.env.NODE_ENV === 'production',
        config => {
          // 启用 Gzip 压缩
          config
            .plugin('CompressionWebpackPlugin')
            .use(require('compression-webpack-plugin'), [{
              filename: '[path].gz[query]', // 目标文件名
              algorithm: 'gzip', // 使用gzip压缩
              test: new RegExp('\\.(js|css)$'), // 压缩 js 与 css
              threshold: 10240, // 资源文件大于10240B=10kB时会被压缩
              minRatio: 0.8 // 最小压缩比达到0.8时才会被压缩
            }])
            .end()

          /**
               * https://segmentfault.com/a/1190000015919928#articleHeader4
               * 将包含 chunks 映射关系的 list 单独从 app.js 里提取出来
               * 因为每一个 chunk 的 id 基本都是基于内容 hash 出来的，所以你每次改动都会影响它，如果不将它提取出来的话，等于app.js每次都会改变，缓存就失效了。
               * 单独抽离 runtimeChunk 之后，每次打包都会生成一个runtimeChunk.xxx.js
               * 其实我们发现打包生成的 runtime.js非常的小，gzip 之后一般只有几 kb，但这个文件又经常会改变，我们每次都需要重新请求它
               * 它的 http 耗时远大于它的执行时间了，所以建议不要将它单独拆包，而是将它内联到我们的 index.html 之中
               */
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              inline: /runtime\..*\.js$/
            }])
            .end()
        }
      )
  },
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: 'https://www.shenyifan.top/apis/syf/php'
  }
}
