const paths = require('./paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: false,
    compress: true,
    hot: true,
    port: 8080,
    // publicPath: '/',
    stats: {
      assets: false,
      modules: false
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})

console.log('\x1b[30m\x1b[42m%s\x1b[0m', '# SERVER LAUNCH #')
