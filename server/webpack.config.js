const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: ['@babel/polyfill', './src/app.js'],
    watch: false,
    mode: 'development',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    },
    module : {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    target: 'node',
    externals: [nodeExternals()],

};