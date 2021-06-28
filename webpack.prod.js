const webpack = require('webpack');
const { merge } = require('webpack-merge');

const CommonConfig = require('./webpack.common');

module.exports = merge(CommonConfig, {
    mode: 'production',
    optimization: {
        minimize: true,
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production',
        }),
    ],
});
