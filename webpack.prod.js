const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const common = require('./webpack.common.js')

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new ImageminPlugin({
      pngquant: {
        quality: '95-100'
      }
    })
  ]
})
