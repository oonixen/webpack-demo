const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        static: baseWebpackConfig.externals.path.dist,
        client: {
            overlay: {
                warnings: false,
                errors: true
            }
        }
    },
})

module.exports = new Promise((resolve) => {
    resolve(devWebpackConfig)
})