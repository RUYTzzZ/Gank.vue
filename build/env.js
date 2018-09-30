/*
 * Copyright (c) 2018 Mailtech.cn, Ltd. All Rights Reserved.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    wrap : (config, env = 'development') => {
        const isProd = env === 'production';
        Object.assign(config, {
            mode    : env,
            devtool : isProd ? 'source-map' : 'cheap-source-map',
            output  : {
                filename      : isProd ? 'assets/[name].[chunkhash:5].bundle.js' : '[name].[hash:5].bundle.js',
                chunkFilename : isProd ? 'assets/[name].[chunkhash:5].bundle.js' : '[name].[hash:5].bundle.js',
                publicPath    : '',
            },
        });

        /** inject bundles */
        config.plugins.push(...[
            new webpack.DefinePlugin({
                'process.env' : env,
            }),  
            new HtmlWebpackPlugin({
                filename : 'index.html',
            }),
        ]);
        if (!isProd) {
            config.plugins.push(...[
                // OccurrenceOrderPlugin is needed for webpack 1.x only
                new webpack.optimize.OccurrenceOrderPlugin(),
                new webpack.HotModuleReplacementPlugin(),
                // Use NoErrorsPlugin for webpack 1.x
                new webpack.NoEmitOnErrorsPlugin()
            ]);
        }

        /** css optimization */
        isProd && config.plugins.push(new OptimizeCSSAssetsPlugin());
        return config;
    },
};
