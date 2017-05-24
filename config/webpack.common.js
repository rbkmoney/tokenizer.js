const path = require('path');
const helpers = require('./helpers');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        tokenizer: './src/tokenizer.js',
        tokenizerProvider: './src/tokenizerProvider.js'
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ]
    },
    module: {
        rules: [
            {enforce: 'pre', test: /\.js$/, exclude: /node_modules/, use: 'eslint-loader'},
            {test: /\.js$/, use: 'babel-loader'}
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './src/rpc/provider.html'
        }, {
            from: './src/tokenizerConfig.json'
        }])
    ],
    output: {
        path: helpers.root('dist'),
        filename: '[name].js'
    },
};
