/**
 * 生产环境打包
 */

'use strict';
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base-config');
const environment = require('./env');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const root = path.resolve(__dirname, '../');

const webpackConfig = merge(environment.wrap(baseConfig, 'production'), {
    entry: {
        main: './src/index.js',
    },
    output: {
        path: `${root}/build/webpack`,
    },

    plugins: [
        new CleanWebpackPlugin(['build/webpack'], {
            root: root,
            verbose: true,
        }),
        new InlineManifestWebpackPlugin(),
        new ManifestPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false,
            },
        }),
    ],
});

module.exports = webpackConfig;
