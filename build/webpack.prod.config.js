const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "production"
})

module.exports = new Promise((resolve) => {
    resolve(devWebpackConfig)
})