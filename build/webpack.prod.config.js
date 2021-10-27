const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "production",
    output: {
        path: baseWebpackConfig.externals.path.dist,
        clean: true
    },

})

module.exports = new Promise((resolve) => {
    resolve(devWebpackConfig)
})