/**
 * webpack loader rules
 */
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    wrap: (config, env = 'development') => {
        const isProd = env === 'production';
        const rules = [];

        /** load templates with raw strings */
        rules.push({test: /\.tpl\.html$/, use: 'raw-loader'});
        
        /** images */
        rules.push({test: /\.(?:png|gif|jpe?g)$/, use: 'file-loader'});

        /** fonts */
        rules.push({
            test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: `${isProd ? 'assets/iconfont/' : ''}[name].[hash:7].[ext]`,
            },
        });

        /** vue rule */
        const VueLoaderPlugin = require('vue-loader/lib/plugin');
        config.plugins.push(/** make sure to include this plugin */new VueLoaderPlugin());
        config.plugins.push(new webpack.NamedModulesPlugin());

        rules.push({
            test: /\.vue$/,
            loader: 'vue-loader',
        });

        /** css rule */
        rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        });

        /** less rule */
        const generateLessRule = isExtract => ({
            test: /\.less$/,
            use: [
                isExtract ? MiniCssExtractPlugin.loader : {loader: 'style-loader'},
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: [require('autoprefixer')({browsers: ['defaults', 'not ie < 10']})],
                    },
                },
                'less-loader',
            ],
        });

        const [extractRule, lessRule] = [generateLessRule(true), generateLessRule(false)];
        /** extract layout for first loading */
        extractRule.test = lessRule.exclude = /layout\.less$/;
        rules.push(extractRule, lessRule);
        config.plugins.push(new MiniCssExtractPlugin({filename: '[name].css'}));

        /** babel rule for es6 modules */
        rules.push({
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        });

        (config.module.rules = config.module.rules || []).push(...rules);
        return config;
    },
};
