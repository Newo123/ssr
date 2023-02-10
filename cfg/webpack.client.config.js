const path = require('path')

const ENV = process.env.NODE_ENV === "production" ? "production" : "development"
const IS_DEV = ENV === 'development'
const IS_PROD = ENV === 'production'

console.log(ENV)

const setupDevtool = () => {
    if (IS_DEV) {
        return 'eval'
    }
    if (IS_PROD) {
        return false
    }
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    mode: ENV ? ENV : 'development',
    entry: path.resolve(__dirname, '../src/client/index.jsx'),
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js'
    },
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        }]
    },
    devtool: setupDevtool()
}