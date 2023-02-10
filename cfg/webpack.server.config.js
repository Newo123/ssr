const path = require('path')
const nodeExternals = require('webpack-node-externals')

const ENV = process.env.NODE_ENV === "production" ? "production" : "development"


module.exports = {
    target: "node",
    mode: ENV ? ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        }]
    },
    optimization: {
        minimize: false
    }
}