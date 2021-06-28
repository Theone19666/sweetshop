const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[fullhash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue'],
        alias: {
            '@': path.resolve('src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(tsx?|jsx?)$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                // include: /img/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/',
                        },
                    },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: 'fonts/',
                            // esModule: false,
                        },
                    },
                ],
                // type: 'asset/resource',
            },
            /* {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                ],
            }, */
            {
                // test: /\.s[ac]ss$/i,
                test: /\.(sass|css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                config: path.resolve(
                                    __dirname,
                                    'postcss.config.js'
                                ),
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            title: 'Сайт с рецептами',
        }),
        new VueLoaderPlugin(),
        /* new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/fonts'),
                    to: path.resolve(__dirname, 'public/fonts'),
                },
            ],
            options: {
                concurrency: 100,
            },
        }), */
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
};
