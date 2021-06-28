const webpack = require('webpack');
const { merge } = require('webpack-merge');

const CommonConfig = require('./webpack.common');

module.exports = merge(CommonConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: ['./src', './public'],
        historyApiFallback: true,
        port: 8080,
        /* open: true,
        hot: true,
        inline: true, */
        // host: 'recipes-nelli.ru',
    },
    watchOptions: {
        poll: true,
        ignored: '/node_modules/',
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
        }),
    ],
});
