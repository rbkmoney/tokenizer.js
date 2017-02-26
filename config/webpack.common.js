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
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            }
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
