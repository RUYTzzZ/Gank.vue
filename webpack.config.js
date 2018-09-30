const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    
  entry: ["webpack-hot-middleware/client", "./src/index.js"],
  devtool: 'inline-source-map',
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',

  },
  module: {
      rules: [
          {
            test: /\.less$/,
            use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loder" // compiles Less to CSS
                }
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }
    ] 
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Webpack'
    }),
    // OccurrenceOrderPlugin is needed for webpack 1.x only
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin()
  ],
};