var merge = require('webpack-merge')
var base = require('./webpack.config.base')

var outputFile = 'vue-supply'

module.exports = merge(base, {
  output: {
    filename: outputFile + '.common.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: {
    // Put external libraries like lodash here
    // With their package name
    // Example: 'lodash': 'lodash'
  },
  devtool: 'source-map',
})
